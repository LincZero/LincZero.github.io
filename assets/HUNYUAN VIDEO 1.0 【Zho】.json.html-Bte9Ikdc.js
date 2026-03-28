import{_ as o,c as t,b as u,r,o as q}from"./app-D8VOuKyT.js";const e={};function b(l,i){const n=r("VueFlow");return q(),t("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const s=o(e,[["render",b]]),d=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN%20VIDEO%201.0%20%E3%80%90Zho%E3%80%91.json.html","title":"HUNYUAN VIDEO 1.0 【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 90, &quot;last_link_id&quot;: 253, &quot;nodes&quot;: [ { &quot;id&quot;: 11, &quot;type&quot;: &quot;DualCLIPLoader&quot;, &quot;pos&quot;: [ 0, 270...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN%20VIDEO%201.0%20%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 90, &quot;last_link_id&quot;: 253, &quot;nodes&quot;: [ { &quot;id&quot;: 11, &quot;type&quot;: &quot;DualCLIPLoader&quot;, &quot;pos&quot;: [ 0, 270..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":8.05,"words":2414},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN VIDEO 1.0 【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 90,<br>\\n&quot;last_link_id&quot;: 253,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 11,<br>\\n&quot;type&quot;: &quot;DualCLIPLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n0,<br>\\n270<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n252<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;DualCLIPLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;clip_l.safetensors&quot;,<br>\\n&quot;llava_llama3_fp8_scaled.safetensors&quot;,<br>\\n&quot;hunyuan_video&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 10,<br>\\n&quot;type&quot;: &quot;VAELoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n0,<br>\\n430<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n60<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n211<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAELoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;hunyuan_video_vae_bf16.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;UNETLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n0,<br>\\n130<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n90<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n250,<br>\\n251<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;UNETLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;hunyuan_video_t2v_720p_bf16.safetensors&quot;,<br>\\n&quot;default&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 82,<br>\\n&quot;type&quot;: &quot;EmptyHunyuanLatentVideo&quot;,<br>\\n&quot;pos&quot;: [<br>\\n0,<br>\\n540<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n130<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n253<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyHunyuanLatentVideo&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n848,<br>\\n480,<br>\\n73,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 90,<br>\\n&quot;type&quot;: &quot;workflow&gt;HUNYUAN&quot;,<br>\\n&quot;pos&quot;: [<br>\\n0,<br>\\n720<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n430<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 250<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;ModelSamplingSD3 model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 251<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 252<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 253<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n249<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;workflow&gt;HUNYUAN&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;euler&quot;,<br>\\n18194918897689,<br>\\n&quot;randomize&quot;,<br>\\n&quot;simple&quot;,<br>\\n20,<br>\\n1,<br>\\n7,<br>\\n&quot;In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.&quot;,<br>\\n6<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 73,<br>\\n&quot;type&quot;: &quot;VAEDecodeTiled&quot;,<br>\\n&quot;pos&quot;: [<br>\\n0,<br>\\n1200<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n102<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 249<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 211<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n216<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecodeTiled&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n256,<br>\\n64<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 78,<br>\\n&quot;type&quot;: &quot;VHS_VideoCombine&quot;,<br>\\n&quot;pos&quot;: [<br>\\n370,<br>\\n130<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n1476.23291015625,<br>\\n1172.091552734375<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 216<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;audio&quot;,<br>\\n&quot;type&quot;: &quot;AUDIO&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;shape&quot;: 7<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;meta_batch&quot;,<br>\\n&quot;type&quot;: &quot;VHS_BatchManager&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;shape&quot;: 7<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;shape&quot;: 7<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;Filenames&quot;,<br>\\n&quot;type&quot;: &quot;VHS_FILENAMES&quot;,<br>\\n&quot;links&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;HUNYUAN TEST ZHO&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VHS_VideoCombine&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: {<br>\\n&quot;frame_rate&quot;: 24,<br>\\n&quot;loop_count&quot;: 0,<br>\\n&quot;filename_prefix&quot;: &quot;HUNYUANTEST&quot;,<br>\\n&quot;format&quot;: &quot;video/h264-mp4&quot;,<br>\\n&quot;pix_fmt&quot;: &quot;yuv420p&quot;,<br>\\n&quot;crf&quot;: 19,<br>\\n&quot;save_metadata&quot;: true,<br>\\n&quot;trim_to_audio&quot;: false,<br>\\n&quot;pingpong&quot;: false,<br>\\n&quot;save_output&quot;: true,<br>\\n&quot;videopreview&quot;: {<br>\\n&quot;hidden&quot;: false,<br>\\n&quot;paused&quot;: false,<br>\\n&quot;params&quot;: {<br>\\n&quot;filename&quot;: &quot;HUNYUANTEST_00001.mp4&quot;,<br>\\n&quot;subfolder&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;output&quot;,<br>\\n&quot;format&quot;: &quot;video/h264-mp4&quot;,<br>\\n&quot;frame_rate&quot;: 24,<br>\\n&quot;workflow&quot;: &quot;HUNYUANTEST_00001.png&quot;,<br>\\n&quot;fullpath&quot;: &quot;/content/ComfyUI/output/HUNYUANTEST_00001.mp4&quot;<br>\\n},<br>\\n&quot;muted&quot;: false<br>\\n}<br>\\n}<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n211,<br>\\n10,<br>\\n0,<br>\\n73,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n216,<br>\\n73,<br>\\n0,<br>\\n78,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n249,<br>\\n90,<br>\\n0,<br>\\n73,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n250,<br>\\n12,<br>\\n0,<br>\\n90,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n251,<br>\\n12,<br>\\n0,<br>\\n90,<br>\\n1,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n252,<br>\\n11,<br>\\n0,<br>\\n90,<br>\\n2,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n253,<br>\\n82,<br>\\n0,<br>\\n90,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 1,<br>\\n&quot;offset&quot;: [<br>\\n293.5286858442546,<br>\\n-4.802425852796546<br>\\n]<br>\\n},<br>\\n&quot;groupNodes&quot;: {<br>\\n&quot;HUNYUAN-1&quot;: {<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;KSamplerSelect&quot;,<br>\\n&quot;pos&quot;: [<br>\\n484,<br>\\n751<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n58<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;采样器&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSamplerSelect&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;euler&quot;<br>\\n],<br>\\n&quot;index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;EmptyHunyuanLatentVideo&quot;,<br>\\n&quot;pos&quot;: [<br>\\n475.540771484375,<br>\\n432.673583984375<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n130<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;潜空间&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyHunyuanLatentVideo&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n848,<br>\\n480,<br>\\n73,<br>\\n1<br>\\n],<br>\\n&quot;index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;RandomNoise&quot;,<br>\\n&quot;pos&quot;: [<br>\\n479,<br>\\n618<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n82<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;NOISE&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;噪声&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;RandomNoise&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n846495953812838,<br>\\n&quot;randomize&quot;<br>\\n],<br>\\n&quot;index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n420,<br>\\n200<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n422.84503173828125,<br>\\n164.31304931640625<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;localized_name&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;CLIP Text Encode (Positive Prompt)&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.&quot;<br>\\n],<br>\\n&quot;index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;BasicScheduler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n478,<br>\\n860<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n106<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;西格玛&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicScheduler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;simple&quot;,<br>\\n20,<br>\\n1<br>\\n],<br>\\n&quot;index&quot;: 4<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;ModelSamplingSD3&quot;,<br>\\n&quot;pos&quot;: [<br>\\n360,<br>\\n0<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n58<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ModelSamplingSD3&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;index&quot;: 5<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;FluxGuidance&quot;,<br>\\n&quot;pos&quot;: [<br>\\n520,<br>\\n100<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n317.4000244140625,<br>\\n58<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;FluxGuidance&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n6<br>\\n],<br>\\n&quot;index&quot;: 6<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;BasicGuider&quot;,<br>\\n&quot;pos&quot;: [<br>\\n600,<br>\\n0<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n222.3482666015625,<br>\\n46<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;GUIDER&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;引导器&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicGuider&quot;<br>\\n},<br>\\n&quot;index&quot;: 7<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;SamplerCustomAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n860,<br>\\n200<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n272.3617858886719,<br>\\n124.53733825683594<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;noise&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;噪声&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;localized_name&quot;: &quot;引导器&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sampler&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;localized_name&quot;: &quot;采样器&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sigmas&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;西格玛&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 4,<br>\\n&quot;localized_name&quot;: &quot;潜空间图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;输出&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;去噪输出&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SamplerCustomAdvanced&quot;<br>\\n},<br>\\n&quot;index&quot;: 8<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n11,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n12,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n12,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n44,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n67,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n0,<br>\\n7,<br>\\n1,<br>\\n26,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n25,<br>\\n&quot;NOISE&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n22,<br>\\n&quot;GUIDER&quot;<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n8,<br>\\n2,<br>\\n16,<br>\\n&quot;SAMPLER&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n8,<br>\\n3,<br>\\n17,<br>\\n&quot;SIGMAS&quot;<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n8,<br>\\n4,<br>\\n45,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;external&quot;: [<br>\\n[<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n]<br>\\n},<br>\\n&quot;HUNYUAN_2&quot;: {<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;KSamplerSelect&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-80.2872085571289,<br>\\n1270.399658203125<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n58<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;采样器&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSamplerSelect&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;euler&quot;<br>\\n],<br>\\n&quot;index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;EmptyHunyuanLatentVideo&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-88.7464370727539,<br>\\n952.0732421875<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n130<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;潜空间&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyHunyuanLatentVideo&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n848,<br>\\n480,<br>\\n73,<br>\\n1<br>\\n],<br>\\n&quot;index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;RandomNoise&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-85.2872085571289,<br>\\n1137.399658203125<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n82<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;NOISE&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;噪声&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;RandomNoise&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n846495953812838,<br>\\n&quot;randomize&quot;<br>\\n],<br>\\n&quot;index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;BasicScheduler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-86.2872085571289,<br>\\n1379.399658203125<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n106<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;西格玛&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicScheduler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;simple&quot;,<br>\\n20,<br>\\n1<br>\\n],<br>\\n&quot;index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;ModelSamplingSD3&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-204.28726196289062,<br>\\n519.3994750976562<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n58<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ModelSamplingSD3&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;index&quot;: 4<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-71.90498352050781,<br>\\n1625.6287841796875<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n422.84503173828125,<br>\\n164.31304931640625<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;localized_name&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;CLIP Text Encode (Positive Prompt)&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.&quot;<br>\\n],<br>\\n&quot;index&quot;: 5<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;FluxGuidance&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-44.28723907470703,<br>\\n619.3994750976562<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n317.4000244140625,<br>\\n58<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;FluxGuidance&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n6<br>\\n],<br>\\n&quot;index&quot;: 6<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;BasicGuider&quot;,<br>\\n&quot;pos&quot;: [<br>\\n35.71280288696289,<br>\\n519.3994750976562<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n222.3482666015625,<br>\\n46<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;GUIDER&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;引导器&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicGuider&quot;<br>\\n},<br>\\n&quot;index&quot;: 7<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;SamplerCustomAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n295.71282958984375,<br>\\n719.3995361328125<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n272.3617858886719,<br>\\n124.53733825683594<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;noise&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;噪声&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;localized_name&quot;: &quot;引导器&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sampler&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;localized_name&quot;: &quot;采样器&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sigmas&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;西格玛&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 4,<br>\\n&quot;localized_name&quot;: &quot;潜空间图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;输出&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;去噪输出&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SamplerCustomAdvanced&quot;<br>\\n},<br>\\n&quot;index&quot;: 8<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n12,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n12,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n11,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n44,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n67,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n0,<br>\\n7,<br>\\n1,<br>\\n26,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n25,<br>\\n&quot;NOISE&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n22,<br>\\n&quot;GUIDER&quot;<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n8,<br>\\n2,<br>\\n16,<br>\\n&quot;SAMPLER&quot;<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n3,<br>\\n17,<br>\\n&quot;SIGMAS&quot;<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n8,<br>\\n4,<br>\\n45,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;external&quot;: [<br>\\n[<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n]<br>\\n},<br>\\n&quot;HUNYUAN&quot;: {<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;KSamplerSelect&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-30,<br>\\n1520<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n58<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;采样器&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSamplerSelect&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;euler&quot;<br>\\n],<br>\\n&quot;index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;RandomNoise&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-40,<br>\\n1390<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n82<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;NOISE&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;噪声&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;RandomNoise&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n846495953812838,<br>\\n&quot;randomize&quot;<br>\\n],<br>\\n&quot;index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;BasicScheduler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-40,<br>\\n1630<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n106<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;西格玛&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicScheduler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;simple&quot;,<br>\\n20,<br>\\n1<br>\\n],<br>\\n&quot;index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;ModelSamplingSD3&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-150,<br>\\n770<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n58<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ModelSamplingSD3&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-20,<br>\\n1880<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n422.84503173828125,<br>\\n164.31304931640625<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;localized_name&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;CLIP Text Encode (Positive Prompt)&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.&quot;<br>\\n],<br>\\n&quot;index&quot;: 4<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;FluxGuidance&quot;,<br>\\n&quot;pos&quot;: [<br>\\n10,<br>\\n870<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n317.4000244140625,<br>\\n58<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;FluxGuidance&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n6<br>\\n],<br>\\n&quot;index&quot;: 5<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;BasicGuider&quot;,<br>\\n&quot;pos&quot;: [<br>\\n90,<br>\\n770<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n222.3482666015625,<br>\\n46<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;localized_name&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;GUIDER&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;引导器&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicGuider&quot;<br>\\n},<br>\\n&quot;index&quot;: 6<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: -1,<br>\\n&quot;type&quot;: &quot;SamplerCustomAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n350,<br>\\n970<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n272.3617858886719,<br>\\n124.53733825683594<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;noise&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;localized_name&quot;: &quot;噪声&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;localized_name&quot;: &quot;引导器&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sampler&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;localized_name&quot;: &quot;采样器&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sigmas&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;西格玛&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 4,<br>\\n&quot;localized_name&quot;: &quot;潜空间图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;输出&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;localized_name&quot;: &quot;去噪输出&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SamplerCustomAdvanced&quot;<br>\\n},<br>\\n&quot;index&quot;: 7<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n2,<br>\\n0,<br>\\n12,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n12,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n11,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n86,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n85,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n6,<br>\\n1,<br>\\n87,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n83,<br>\\n&quot;NOISE&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n0,<br>\\n7,<br>\\n1,<br>\\n88,<br>\\n&quot;GUIDER&quot;<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n7,<br>\\n2,<br>\\n81,<br>\\n&quot;SAMPLER&quot;<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n7,<br>\\n3,<br>\\n84,<br>\\n&quot;SIGMAS&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n7,<br>\\n4,<br>\\n82,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;external&quot;: [<br>\\n[<br>\\n7,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n]<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN VIDEO 1.0 【Zho】.json","value":{"title":"HUNYUAN VIDEO 1.0 【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN VIDEO 1.0 【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{s as comp,d as data};

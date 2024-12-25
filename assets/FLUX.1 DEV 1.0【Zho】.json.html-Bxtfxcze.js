import{_ as e,c as s,b as t,o,r as l}from"./app-CtMeyR3O.js";const i={};function a(p,d){const n=l("VueFlow");return o(),s("div",null,[t(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 28,
  "last_link_id": 71,
  "nodes": [
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        -110,
        220
      ],
      "size": [
        310,
        110
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            71
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        1024,
        1024,
        1
      ]
    },
    {
      "id": 11,
      "type": "DualCLIPLoader",
      "pos": [
        -110,
        60
      ],
      "size": [
        310,
        110
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            10
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DualCLIPLoader"
      },
      "widgets_values": [
        "t5xxl_fp16.safetensors",
        "clip_l.safetensors",
        "flux"
      ]
    },
    {
      "id": 12,
      "type": "UNETLoader",
      "pos": [
        -110,
        -70
      ],
      "size": [
        310,
        80
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            63,
            69
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UNETLoader"
      },
      "widgets_values": [
        "flux1-dev.sft",
        "default"
      ]
    },
    {
      "id": 10,
      "type": "VAELoader",
      "pos": [
        -110,
        380
      ],
      "size": [
        310,
        60
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            12
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "ae.sft"
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        -110,
        490
      ],
      "size": [
        310,
        50
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 68
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 12
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            41
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 28,
      "type": "workflow/FLUX",
      "pos": [
        220,
        310
      ],
      "size": [
        280,
        230
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 69
        },
        {
          "name": "guider",
          "type": "GUIDER",
          "link": 70
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 71
        }
      ],
      "outputs": [
        {
          "name": "output",
          "type": "LATENT",
          "links": [
            68
          ],
          "shape": 3
        },
        {
          "name": "denoised_output",
          "type": "LATENT",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "workflow/FLUX"
      },
      "widgets_values": [
        145663190803925,
        "randomize",
        "euler",
        "simple",
        20,
        1
      ]
    },
    {
      "id": 25,
      "type": "BasicGuider",
      "pos": [
        220,
        210
      ],
      "size": [
        280,
        50
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 63,
          "slot_index": 0
        },
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 64,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "GUIDER",
          "type": "GUIDER",
          "links": [
            70
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "BasicGuider"
      }
    },
    {
      "id": 26,
      "type": "PreviewImage",
      "pos": [
        520,
        -70
      ],
      "size": [
        580,
        610
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 41
        }
      ],
      "title": "FLUX.1 Dev",
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        220,
        -70
      ],
      "size": [
        280,
        230
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            64
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "3 magical wizards stand on a yellow table\\nOn the left, a wizard in black robes holds a sign that says ‘FLUX’\\nIn the middle, a witch in red robes holds a sign that says ‘is’\\nand on the right, a wizard in blue robes holds a sign that says ‘cool’\\nBehind them a purple dragon"
      ]
    }
  ],
  "links": [
    [
      10,
      11,
      0,
      6,
      0,
      "CLIP"
    ],
    [
      12,
      10,
      0,
      8,
      1,
      "VAE"
    ],
    [
      41,
      8,
      0,
      26,
      0,
      "IMAGE"
    ],
    [
      63,
      12,
      0,
      25,
      0,
      "MODEL"
    ],
    [
      64,
      6,
      0,
      25,
      1,
      "CONDITIONING"
    ],
    [
      68,
      28,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      69,
      12,
      0,
      28,
      0,
      "MODEL"
    ],
    [
      70,
      25,
      0,
      28,
      1,
      "GUIDER"
    ],
    [
      71,
      5,
      0,
      28,
      2,
      "LATENT"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1.4641000000000006,
      "offset": [
        199.29402709972823,
        386.5856177924519
      ]
    },
    "groupNodes": {
      "flux": {
        "nodes": [
          {
            "type": "BasicGuider",
            "pos": [
              770,
              -50
            ],
            "size": {
              "0": 241.79998779296875,
              "1": 46
            },
            "flags": {},
            "order": 8,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "slot_index": 0
              },
              {
                "name": "conditioning",
                "type": "CONDITIONING",
                "link": null,
                "slot_index": 1
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
              "Node name for S&R": "BasicGuider"
            },
            "index": 0
          },
          {
            "type": "RandomNoise",
            "pos": [
              300,
              -250
            ],
            "size": {
              "0": 315,
              "1": 82
            },
            "flags": {},
            "order": 3,
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
              1035243129351945,
              "randomize"
            ],
            "index": 1
          },
          {
            "type": "KSamplerSelect",
            "pos": [
              270,
              540
            ],
            "size": {
              "0": 315,
              "1": 58
            },
            "flags": {},
            "order": 4,
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
            "index": 2
          },
          {
            "type": "BasicScheduler",
            "pos": [
              220,
              757
            ],
            "size": {
              "0": 315,
              "1": 106
            },
            "flags": {},
            "order": 6,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "slot_index": 0
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
              "simple",
              20,
              1
            ],
            "index": 3
          },
          {
            "type": "SamplerCustomAdvanced",
            "pos": [
              1099,
              170
            ],
            "size": {
              "0": 355.20001220703125,
              "1": 106
            },
            "flags": {},
            "order": 9,
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
            "index": 4
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
            0,
            0,
            12,
            "MODEL"
          ],
          [
            null,
            0,
            0,
            1,
            6,
            "CONDITIONING"
          ],
          [
            1,
            0,
            4,
            0,
            25,
            "NOISE"
          ],
          [
            0,
            0,
            4,
            1,
            22,
            "GUIDER"
          ],
          [
            2,
            0,
            4,
            2,
            16,
            "SAMPLER"
          ],
          [
            3,
            0,
            4,
            3,
            17,
            "SIGMAS"
          ],
          [
            null,
            0,
            4,
            4,
            5,
            "LATENT"
          ]
        ],
        "external": [
          [
            {
              "type": "SamplerCustomAdvanced",
              "pos": [
                1099,
                170
              ],
              "size": {
                "0": 355.20001220703125,
                "1": 106
              },
              "flags": {},
              "order": 9,
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
              "index": 4
            },
            0,
            "LATENT"
          ]
        ],
        "config": {
          "0": {},
          "1": {},
          "2": {},
          "3": {},
          "4": {}
        }
      },
      "FLUX": {
        "nodes": [
          {
            "type": "RandomNoise",
            "pos": [
              470,
              -330
            ],
            "size": {
              "0": 315,
              "1": 82
            },
            "flags": {},
            "order": 4,
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
              1035243129351945,
              "randomize"
            ],
            "index": 0
          },
          {
            "type": "KSamplerSelect",
            "pos": [
              440,
              460
            ],
            "size": {
              "0": 315,
              "1": 58
            },
            "flags": {},
            "order": 5,
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
            "index": 1
          },
          {
            "type": "BasicScheduler",
            "pos": [
              390,
              670
            ],
            "size": {
              "0": 315,
              "1": 106
            },
            "flags": {},
            "order": 6,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "slot_index": 0
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
              "simple",
              20,
              1
            ],
            "index": 2
          },
          {
            "type": "SamplerCustomAdvanced",
            "pos": [
              1270,
              90
            ],
            "size": {
              "0": 355.20001220703125,
              "1": 106
            },
            "flags": {},
            "order": 9,
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
            "index": 3
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
            0,
            0,
            3,
            0,
            16,
            "NOISE"
          ],
          [
            null,
            0,
            3,
            1,
            25,
            "GUIDER"
          ],
          [
            1,
            0,
            3,
            2,
            17,
            "SAMPLER"
          ],
          [
            2,
            0,
            3,
            3,
            22,
            "SIGMAS"
          ],
          [
            null,
            0,
            3,
            4,
            5,
            "LATENT"
          ]
        ],
        "external": [
          [
            3,
            0,
            "LATENT"
          ]
        ]
      }
    }
  },
  "version": 0.4
}
`})])}const m=e(i,[["render",a],["__file","FLUX.1 DEV 1.0【Zho】.json.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/FLUX.1%20DEV%201.0%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 28, \\"last_link_id\\": 71, \\"nodes\\": [ { \\"id\\": 5, \\"type\\": \\"EmptyLatentImage\\", \\"pos\\": [ -110, 220 ], \\"size\\": [ 310, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outp...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/FLUX.1%20DEV%201.0%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 28, \\"last_link_id\\": 71, \\"nodes\\": [ { \\"id\\": 5, \\"type\\": \\"EmptyLatentImage\\", \\"pos\\": [ -110, 220 ], \\"size\\": [ 310, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.78,"words":1134},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/FLUX.1 DEV 1.0【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 28,\\n\\"last_link_id\\": 71,\\n\\"nodes\\": [\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n-110,\\n220\\n],\\n\\"size\\": [\\n310,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n71\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1024,\\n1\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"DualCLIPLoader\\",\\n\\"pos\\": [\\n-110,\\n60\\n],\\n\\"size\\": [\\n310,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n10\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DualCLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"t5xxl_fp16.safetensors\\",\\n\\"clip_l.safetensors\\",\\n\\"flux\\"\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"UNETLoader\\",\\n\\"pos\\": [\\n-110,\\n-70\\n],\\n\\"size\\": [\\n310,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n63,\\n69\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UNETLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"flux1-dev.sft\\",\\n\\"default\\"\\n]\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"VAELoader\\",\\n\\"pos\\": [\\n-110,\\n380\\n],\\n\\"size\\": [\\n310,\\n60\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n12\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"ae.sft\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n-110,\\n490\\n],\\n\\"size\\": [\\n310,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 68\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 12\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n41\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 28,\\n\\"type\\": \\"workflow/FLUX\\",\\n\\"pos\\": [\\n220,\\n310\\n],\\n\\"size\\": [\\n280,\\n230\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 69\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": 70\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 71\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n68\\n],\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"workflow/FLUX\\"\\n},\\n\\"widgets_values\\": [\\n145663190803925,\\n\\"randomize\\",\\n\\"euler\\",\\n\\"simple\\",\\n20,\\n1\\n]\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"BasicGuider\\",\\n\\"pos\\": [\\n220,\\n210\\n],\\n\\"size\\": [\\n280,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 63,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 64,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"GUIDER\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"links\\": [\\n70\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicGuider\\"\\n}\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n520,\\n-70\\n],\\n\\"size\\": [\\n580,\\n610\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 41\\n}\\n],\\n\\"title\\": \\"FLUX.1 Dev\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n220,\\n-70\\n],\\n\\"size\\": [\\n280,\\n230\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 10\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n64\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"3 magical wizards stand on a yellow table\\\\nOn the left, a wizard in black robes holds a sign that says ‘FLUX’\\\\nIn the middle, a witch in red robes holds a sign that says ‘is’\\\\nand on the right, a wizard in blue robes holds a sign that says ‘cool’\\\\nBehind them a purple dragon\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n10,\\n11,\\n0,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n12,\\n10,\\n0,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n41,\\n8,\\n0,\\n26,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n63,\\n12,\\n0,\\n25,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n64,\\n6,\\n0,\\n25,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n68,\\n28,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n69,\\n12,\\n0,\\n28,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n70,\\n25,\\n0,\\n28,\\n1,\\n\\"GUIDER\\"\\n],\\n[\\n71,\\n5,\\n0,\\n28,\\n2,\\n\\"LATENT\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 1.4641000000000006,\\n\\"offset\\": [\\n199.29402709972823,\\n386.5856177924519\\n]\\n},\\n\\"groupNodes\\": {\\n\\"flux\\": {\\n\\"nodes\\": [\\n{\\n\\"type\\": \\"BasicGuider\\",\\n\\"pos\\": [\\n770,\\n-50\\n],\\n\\"size\\": {\\n\\"0\\": 241.79998779296875,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"GUIDER\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicGuider\\"\\n},\\n\\"index\\": 0\\n},\\n{\\n\\"type\\": \\"RandomNoise\\",\\n\\"pos\\": [\\n300,\\n-250\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"NOISE\\",\\n\\"type\\": \\"NOISE\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"\\n},\\n\\"widgets_values\\": [\\n1035243129351945,\\n\\"randomize\\"\\n],\\n\\"index\\": 1\\n},\\n{\\n\\"type\\": \\"KSamplerSelect\\",\\n\\"pos\\": [\\n270,\\n540\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SAMPLER\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"\\n},\\n\\"widgets_values\\": [\\n\\"euler\\"\\n],\\n\\"index\\": 2\\n},\\n{\\n\\"type\\": \\"BasicScheduler\\",\\n\\"pos\\": [\\n220,\\n757\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SIGMAS\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"\\n},\\n\\"widgets_values\\": [\\n\\"simple\\",\\n20,\\n1\\n],\\n\\"index\\": 3\\n},\\n{\\n\\"type\\": \\"SamplerCustomAdvanced\\",\\n\\"pos\\": [\\n1099,\\n170\\n],\\n\\"size\\": {\\n\\"0\\": 355.20001220703125,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"noise\\",\\n\\"type\\": \\"NOISE\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"sampler\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"sigmas\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"link\\": null,\\n\\"slot_index\\": 3\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": null,\\n\\"slot_index\\": 4\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"\\n},\\n\\"index\\": 4\\n}\\n],\\n\\"links\\": [\\n[\\nnull,\\n0,\\n3,\\n0,\\n12,\\n\\"MODEL\\"\\n],\\n[\\nnull,\\n0,\\n0,\\n0,\\n12,\\n\\"MODEL\\"\\n],\\n[\\nnull,\\n0,\\n0,\\n1,\\n6,\\n\\"CONDITIONING\\"\\n],\\n[\\n1,\\n0,\\n4,\\n0,\\n25,\\n\\"NOISE\\"\\n],\\n[\\n0,\\n0,\\n4,\\n1,\\n22,\\n\\"GUIDER\\"\\n],\\n[\\n2,\\n0,\\n4,\\n2,\\n16,\\n\\"SAMPLER\\"\\n],\\n[\\n3,\\n0,\\n4,\\n3,\\n17,\\n\\"SIGMAS\\"\\n],\\n[\\nnull,\\n0,\\n4,\\n4,\\n5,\\n\\"LATENT\\"\\n]\\n],\\n\\"external\\": [\\n[\\n{\\n\\"type\\": \\"SamplerCustomAdvanced\\",\\n\\"pos\\": [\\n1099,\\n170\\n],\\n\\"size\\": {\\n\\"0\\": 355.20001220703125,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"noise\\",\\n\\"type\\": \\"NOISE\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"sampler\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"sigmas\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"link\\": null,\\n\\"slot_index\\": 3\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": null,\\n\\"slot_index\\": 4\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"\\n},\\n\\"index\\": 4\\n},\\n0,\\n\\"LATENT\\"\\n]\\n],\\n\\"config\\": {\\n\\"0\\": {},\\n\\"1\\": {},\\n\\"2\\": {},\\n\\"3\\": {},\\n\\"4\\": {}\\n}\\n},\\n\\"FLUX\\": {\\n\\"nodes\\": [\\n{\\n\\"type\\": \\"RandomNoise\\",\\n\\"pos\\": [\\n470,\\n-330\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"NOISE\\",\\n\\"type\\": \\"NOISE\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"\\n},\\n\\"widgets_values\\": [\\n1035243129351945,\\n\\"randomize\\"\\n],\\n\\"index\\": 0\\n},\\n{\\n\\"type\\": \\"KSamplerSelect\\",\\n\\"pos\\": [\\n440,\\n460\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SAMPLER\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"\\n},\\n\\"widgets_values\\": [\\n\\"euler\\"\\n],\\n\\"index\\": 1\\n},\\n{\\n\\"type\\": \\"BasicScheduler\\",\\n\\"pos\\": [\\n390,\\n670\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SIGMAS\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"\\n},\\n\\"widgets_values\\": [\\n\\"simple\\",\\n20,\\n1\\n],\\n\\"index\\": 2\\n},\\n{\\n\\"type\\": \\"SamplerCustomAdvanced\\",\\n\\"pos\\": [\\n1270,\\n90\\n],\\n\\"size\\": {\\n\\"0\\": 355.20001220703125,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"noise\\",\\n\\"type\\": \\"NOISE\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"sampler\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"sigmas\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"link\\": null,\\n\\"slot_index\\": 3\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": null,\\n\\"slot_index\\": 4\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"\\n},\\n\\"index\\": 3\\n}\\n],\\n\\"links\\": [\\n[\\nnull,\\n0,\\n2,\\n0,\\n12,\\n\\"MODEL\\"\\n],\\n[\\n0,\\n0,\\n3,\\n0,\\n16,\\n\\"NOISE\\"\\n],\\n[\\nnull,\\n0,\\n3,\\n1,\\n25,\\n\\"GUIDER\\"\\n],\\n[\\n1,\\n0,\\n3,\\n2,\\n17,\\n\\"SAMPLER\\"\\n],\\n[\\n2,\\n0,\\n3,\\n3,\\n22,\\n\\"SIGMAS\\"\\n],\\n[\\nnull,\\n0,\\n3,\\n4,\\n5,\\n\\"LATENT\\"\\n]\\n],\\n\\"external\\": [\\n[\\n3,\\n0,\\n\\"LATENT\\"\\n]\\n]\\n}\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,u as data};

import{_ as t,c as o,b as u,r,o as q}from"./app-D8VOuKyT.js";const e={};function b(s,l){const n=r("VueFlow");return q(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const a=t(e,[["render",b]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/FLUX.1%20DEV%201.0%E3%80%90Zho%E3%80%91.json.html","title":"FLUX.1 DEV 1.0【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 28, &quot;last_link_id&quot;: 71, &quot;nodes&quot;: [ { &quot;id&quot;: 5, &quot;type&quot;: &quot;EmptyLatentImage&quot;, &quot;pos&quot;: [ -110, ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/FLUX.1%20DEV%201.0%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 28, &quot;last_link_id&quot;: 71, &quot;nodes&quot;: [ { &quot;id&quot;: 5, &quot;type&quot;: &quot;EmptyLatentImage&quot;, &quot;pos&quot;: [ -110, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":3.78,"words":1134},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/FLUX.1 DEV 1.0【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 28,<br>\\n&quot;last_link_id&quot;: 71,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 5,<br>\\n&quot;type&quot;: &quot;EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-110,<br>\\n220<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n71<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 11,<br>\\n&quot;type&quot;: &quot;DualCLIPLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-110,<br>\\n60<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n10<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;DualCLIPLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;t5xxl_fp16.safetensors&quot;,<br>\\n&quot;clip_l.safetensors&quot;,<br>\\n&quot;flux&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;UNETLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-110,<br>\\n-70<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n80<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n63,<br>\\n69<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;UNETLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;flux1-dev.sft&quot;,<br>\\n&quot;default&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 10,<br>\\n&quot;type&quot;: &quot;VAELoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-110,<br>\\n380<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n60<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n12<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAELoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ae.sft&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-110,<br>\\n490<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 68<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 12<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n41<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 28,<br>\\n&quot;type&quot;: &quot;workflow/FLUX&quot;,<br>\\n&quot;pos&quot;: [<br>\\n220,<br>\\n310<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n280,<br>\\n230<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 69<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: 70<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 71<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n68<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;workflow/FLUX&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n145663190803925,<br>\\n&quot;randomize&quot;,<br>\\n&quot;euler&quot;,<br>\\n&quot;simple&quot;,<br>\\n20,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 25,<br>\\n&quot;type&quot;: &quot;BasicGuider&quot;,<br>\\n&quot;pos&quot;: [<br>\\n220,<br>\\n210<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n280,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 63,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 64,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;GUIDER&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;links&quot;: [<br>\\n70<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicGuider&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 26,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n520,<br>\\n-70<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n580,<br>\\n610<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 41<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;FLUX.1 Dev&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n220,<br>\\n-70<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n280,<br>\\n230<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 10<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n64<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;3 magical wizards stand on a yellow table\\\\nOn the left, a wizard in black robes holds a sign that says ‘FLUX’\\\\nIn the middle, a witch in red robes holds a sign that says ‘is’\\\\nand on the right, a wizard in blue robes holds a sign that says ‘cool’\\\\nBehind them a purple dragon&quot;<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n10,<br>\\n11,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n12,<br>\\n10,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n41,<br>\\n8,<br>\\n0,<br>\\n26,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n63,<br>\\n12,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n64,<br>\\n6,<br>\\n0,<br>\\n25,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n68,<br>\\n28,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n69,<br>\\n12,<br>\\n0,<br>\\n28,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n70,<br>\\n25,<br>\\n0,<br>\\n28,<br>\\n1,<br>\\n&quot;GUIDER&quot;<br>\\n],<br>\\n[<br>\\n71,<br>\\n5,<br>\\n0,<br>\\n28,<br>\\n2,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 1.4641000000000006,<br>\\n&quot;offset&quot;: [<br>\\n199.29402709972823,<br>\\n386.5856177924519<br>\\n]<br>\\n},<br>\\n&quot;groupNodes&quot;: {<br>\\n&quot;flux&quot;: {<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;type&quot;: &quot;BasicGuider&quot;,<br>\\n&quot;pos&quot;: [<br>\\n770,<br>\\n-50<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 241.79998779296875,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;GUIDER&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicGuider&quot;<br>\\n},<br>\\n&quot;index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;RandomNoise&quot;,<br>\\n&quot;pos&quot;: [<br>\\n300,<br>\\n-250<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 82<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;NOISE&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;RandomNoise&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1035243129351945,<br>\\n&quot;randomize&quot;<br>\\n],<br>\\n&quot;index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;KSamplerSelect&quot;,<br>\\n&quot;pos&quot;: [<br>\\n270,<br>\\n540<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSamplerSelect&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;euler&quot;<br>\\n],<br>\\n&quot;index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;BasicScheduler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n220,<br>\\n757<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicScheduler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;simple&quot;,<br>\\n20,<br>\\n1<br>\\n],<br>\\n&quot;index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;SamplerCustomAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1099,<br>\\n170<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 355.20001220703125,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;noise&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sampler&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sigmas&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 4<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SamplerCustomAdvanced&quot;<br>\\n},<br>\\n&quot;index&quot;: 4<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n12,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n12,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n0,<br>\\n1,<br>\\n6,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n25,<br>\\n&quot;NOISE&quot;<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n4,<br>\\n1,<br>\\n22,<br>\\n&quot;GUIDER&quot;<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n4,<br>\\n2,<br>\\n16,<br>\\n&quot;SAMPLER&quot;<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n4,<br>\\n3,<br>\\n17,<br>\\n&quot;SIGMAS&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n4,<br>\\n4,<br>\\n5,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;external&quot;: [<br>\\n[<br>\\n{<br>\\n&quot;type&quot;: &quot;SamplerCustomAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1099,<br>\\n170<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 355.20001220703125,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;noise&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sampler&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sigmas&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 4<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SamplerCustomAdvanced&quot;<br>\\n},<br>\\n&quot;index&quot;: 4<br>\\n},<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;config&quot;: {<br>\\n&quot;0&quot;: {},<br>\\n&quot;1&quot;: {},<br>\\n&quot;2&quot;: {},<br>\\n&quot;3&quot;: {},<br>\\n&quot;4&quot;: {}<br>\\n}<br>\\n},<br>\\n&quot;FLUX&quot;: {<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;type&quot;: &quot;RandomNoise&quot;,<br>\\n&quot;pos&quot;: [<br>\\n470,<br>\\n-330<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 82<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;NOISE&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;RandomNoise&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1035243129351945,<br>\\n&quot;randomize&quot;<br>\\n],<br>\\n&quot;index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;KSamplerSelect&quot;,<br>\\n&quot;pos&quot;: [<br>\\n440,<br>\\n460<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSamplerSelect&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;euler&quot;<br>\\n],<br>\\n&quot;index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;BasicScheduler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n390,<br>\\n670<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicScheduler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;simple&quot;,<br>\\n20,<br>\\n1<br>\\n],<br>\\n&quot;index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;SamplerCustomAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1270,<br>\\n90<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 355.20001220703125,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;noise&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sampler&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sigmas&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 4<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SamplerCustomAdvanced&quot;<br>\\n},<br>\\n&quot;index&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n2,<br>\\n0,<br>\\n12,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n16,<br>\\n&quot;NOISE&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n25,<br>\\n&quot;GUIDER&quot;<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n17,<br>\\n&quot;SAMPLER&quot;<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n22,<br>\\n&quot;SIGMAS&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n4,<br>\\n5,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;external&quot;: [<br>\\n[<br>\\n3,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n]<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/FLUX.1 DEV 1.0【Zho】.json","value":{"title":"FLUX.1 DEV 1.0【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/FLUX.1 DEV 1.0【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{a as comp,p as data};

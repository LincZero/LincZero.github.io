import{_ as r,e as b,h as e,r as t,o}from"./app-BMDPl2h4.js";const i={};function s(a,p){const n=t("VueFlow");return o(),b("div",null,[e(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 56,
  "last_link_id": 137,
  "nodes": [
    {
      "id": 34,
      "type": "StableCascade_EmptyLatentImage",
      "pos": [
        -800,
        300
      ],
      "size": {
        "0": 360,
        "1": 150
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "stage_c",
          "type": "LATENT",
          "links": [
            123
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
      "id": 49,
      "type": "unCLIPCheckpointLoader",
      "pos": [
        -800,
        130
      ],
      "size": {
        "0": 360,
        "1": 120
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            118
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            119,
            120
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "shape": 3
        },
        {
          "name": "CLIP_VISION",
          "type": "CLIP_VISION",
          "links": [
            121,
            132
          ],
          "shape": 3,
          "slot_index": 3
        }
      ],
      "properties": {
        "Node name for S&R": "unCLIPCheckpointLoader"
      },
      "widgets_values": [
        "stable_cascade_stage_c.safetensors"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        -800,
        750
      ],
      "size": [
        360,
        150
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 120
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            108,
            129
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
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        -800,
        500
      ],
      "size": [
        360,
        200
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 119
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            125,
            128
          ],
          "slot_index": 0
        }
      ],
      "title": "CLIP Text Encode (Positive Prompt)",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "cute cat cartoon"
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        -40,
        850
      ],
      "size": [
        380,
        50
      ],
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
            130
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 42,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -40,
        130
      ],
      "size": [
        380,
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
      "id": 53,
      "type": "LoadImage",
      "pos": [
        -800,
        950
      ],
      "size": [
        300,
        400
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            131
          ],
          "shape": 3
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
        "ComfyUI_temp_pcyxc_00007_.png",
        "image"
      ]
    },
    {
      "id": 52,
      "type": "PreviewImage",
      "pos": [
        -480,
        950
      ],
      "size": [
        820,
        850
      ],
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 130
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        -420,
        640
      ],
      "size": [
        360,
        260
      ],
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 118,
          "slot_index": 0
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 137
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 108
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 123
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
        496976179875836,
        "randomize",
        20,
        4,
        "euler_ancestral",
        "simple",
        1
      ]
    },
    {
      "id": 55,
      "type": "unCLIPConditioning",
      "pos": [
        -420,
        490
      ],
      "size": [
        360,
        100
      ],
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 136
        },
        {
          "name": "clip_vision_output",
          "type": "CLIP_VISION_OUTPUT",
          "link": 135
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            137
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "unCLIPConditioning"
      },
      "widgets_values": [
        1,
        0
      ]
    },
    {
      "id": 54,
      "type": "CLIPVisionEncode",
      "pos": [
        -420,
        390
      ],
      "size": [
        360,
        50
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip_vision",
          "type": "CLIP_VISION",
          "link": 132
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 133,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "CLIP_VISION_OUTPUT",
          "type": "CLIP_VISION_OUTPUT",
          "links": [
            135
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPVisionEncode"
      }
    },
    {
      "id": 51,
      "type": "unCLIPConditioning",
      "pos": [
        -420,
        230
      ],
      "size": [
        360,
        110
      ],
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 125
        },
        {
          "name": "clip_vision_output",
          "type": "CLIP_VISION_OUTPUT",
          "link": 124
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            136
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "unCLIPConditioning"
      },
      "widgets_values": [
        1,
        0
      ]
    },
    {
      "id": 50,
      "type": "CLIPVisionEncode",
      "pos": [
        -420,
        130
      ],
      "size": [
        360,
        50
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "clip_vision",
          "type": "CLIP_VISION",
          "link": 121
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 131,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "CLIP_VISION_OUTPUT",
          "type": "CLIP_VISION_OUTPUT",
          "links": [
            124
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPVisionEncode"
      }
    },
    {
      "id": 36,
      "type": "StableCascade_StageB_Conditioning",
      "pos": [
        -40,
        280
      ],
      "size": [
        380,
        60
      ],
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 128
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
      "id": 56,
      "type": "LoadImage",
      "pos": [
        -800,
        1400
      ],
      "size": [
        300,
        400
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            133
          ],
          "shape": 3
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
        "ComfyUI_temp_pcyxc_00007_.png",
        "image"
      ]
    },
    {
      "id": 33,
      "type": "KSampler",
      "pos": [
        -40,
        390
      ],
      "size": [
        380,
        410
      ],
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
          "link": 129
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
        653638923925004,
        "randomize",
        10,
        1.1,
        "euler_ancestral",
        "simple",
        1
      ]
    }
  ],
  "links": [
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
      108,
      7,
      0,
      3,
      2,
      "CONDITIONING"
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
      118,
      49,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      119,
      49,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      120,
      49,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      121,
      49,
      3,
      50,
      0,
      "CLIP_VISION"
    ],
    [
      123,
      34,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      124,
      50,
      0,
      51,
      1,
      "CLIP_VISION_OUTPUT"
    ],
    [
      125,
      6,
      0,
      51,
      0,
      "CONDITIONING"
    ],
    [
      128,
      6,
      0,
      36,
      0,
      "CONDITIONING"
    ],
    [
      129,
      7,
      0,
      33,
      2,
      "CONDITIONING"
    ],
    [
      130,
      8,
      0,
      52,
      0,
      "IMAGE"
    ],
    [
      131,
      53,
      0,
      50,
      1,
      "IMAGE"
    ],
    [
      132,
      49,
      3,
      54,
      0,
      "CLIP_VISION"
    ],
    [
      133,
      56,
      0,
      54,
      1,
      "IMAGE"
    ],
    [
      135,
      54,
      0,
      55,
      1,
      "CLIP_VISION_OUTPUT"
    ],
    [
      136,
      51,
      0,
      55,
      0,
      "CONDITIONING"
    ],
    [
      137,
      55,
      0,
      3,
      1,
      "CONDITIONING"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const I=r(i,[["render",s],["__file","Stable Cascade ImagePrompt Mix【Zho】.json.html.vue"]]),d=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20ImagePrompt%20Mix%E3%80%90Zho%E3%80%91.json.html","title":"Stable Cascade ImagePrompt Mix【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 56, \\"last_link_id\\": 137, \\"nodes\\": [ { \\"id\\": 34, \\"type\\": \\"StableCascade_EmptyLatentImage\\", \\"pos\\": [ -800, 300 ], \\"size\\": { \\"0\\": 360, \\"1\\": 150 }, \\"flags\\": {}, \\"o...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20ImagePrompt%20Mix%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 56, \\"last_link_id\\": 137, \\"nodes\\": [ { \\"id\\": 34, \\"type\\": \\"StableCascade_EmptyLatentImage\\", \\"pos\\": [ -800, 300 ], \\"size\\": { \\"0\\": 360, \\"1\\": 150 }, \\"flags\\": {}, \\"o..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":3.16,"words":947},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Mix【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 56,<br>\\n\\"last_link_id\\": 137,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 34,<br>\\n\\"type\\": \\"StableCascade_EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n-800,<br>\\n300<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 150<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"stage_c\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n123<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"stage_b\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n83<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StableCascade_EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1024,<br>\\n42,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 49,<br>\\n\\"type\\": \\"unCLIPCheckpointLoader\\",<br>\\n\\"pos\\": [<br>\\n-800,<br>\\n130<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 120<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n118<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n119,<br>\\n120<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP_VISION\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"links\\": [<br>\\n121,<br>\\n132<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"unCLIPCheckpointLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"stable_cascade_stage_c.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-800,<br>\\n750<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n150<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 120<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n108,<br>\\n129<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Negative Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"text, watermark\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-800,<br>\\n500<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n200<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 119<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n125,<br>\\n128<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"cute cat cartoon\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n-40,<br>\\n850<br>\\n],<br>\\n\\"size\\": [<br>\\n380,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 98<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 114,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n130<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 42,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-40,<br>\\n130<br>\\n],<br>\\n\\"size\\": [<br>\\n380,<br>\\n100<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n113<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n114<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"stable_cascade_stage_b.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 53,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-800,<br>\\n950<br>\\n],<br>\\n\\"size\\": [<br>\\n300,<br>\\n400<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n131<br>\\n],<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI_temp_pcyxc_00007_.png\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 52,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n-480,<br>\\n950<br>\\n],<br>\\n\\"size\\": [<br>\\n820,<br>\\n850<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 130<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n640<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n260<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 118,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 137<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 108<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 123<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n88<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n496976179875836,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n4,<br>\\n\\"euler_ancestral\\",<br>\\n\\"simple\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 55,<br>\\n\\"type\\": \\"unCLIPConditioning\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n490<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n100<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 136<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip_vision_output\\",<br>\\n\\"type\\": \\"CLIP_VISION_OUTPUT\\",<br>\\n\\"link\\": 135<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n137<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"unCLIPConditioning\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1,<br>\\n0<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 54,<br>\\n\\"type\\": \\"CLIPVisionEncode\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n390<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip_vision\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"link\\": 132<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 133,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP_VISION_OUTPUT\\",<br>\\n\\"type\\": \\"CLIP_VISION_OUTPUT\\",<br>\\n\\"links\\": [<br>\\n135<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPVisionEncode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 51,<br>\\n\\"type\\": \\"unCLIPConditioning\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n230<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 125<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip_vision_output\\",<br>\\n\\"type\\": \\"CLIP_VISION_OUTPUT\\",<br>\\n\\"link\\": 124<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n136<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"unCLIPConditioning\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1,<br>\\n0<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 50,<br>\\n\\"type\\": \\"CLIPVisionEncode\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n130<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip_vision\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"link\\": 121<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 131,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP_VISION_OUTPUT\\",<br>\\n\\"type\\": \\"CLIP_VISION_OUTPUT\\",<br>\\n\\"links\\": [<br>\\n124<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPVisionEncode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 36,<br>\\n\\"type\\": \\"StableCascade_StageB_Conditioning\\",<br>\\n\\"pos\\": [<br>\\n-40,<br>\\n280<br>\\n],<br>\\n\\"size\\": [<br>\\n380,<br>\\n60<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 128<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"stage_c\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 88<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n86<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StableCascade_StageB_Conditioning\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 56,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-800,<br>\\n1400<br>\\n],<br>\\n\\"size\\": [<br>\\n300,<br>\\n400<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n133<br>\\n],<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI_temp_pcyxc_00007_.png\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 33,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-40,<br>\\n390<br>\\n],<br>\\n\\"size\\": [<br>\\n380,<br>\\n410<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 113,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 86<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 129<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 83<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n98<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n653638923925004,<br>\\n\\"randomize\\",<br>\\n10,<br>\\n1.1,<br>\\n\\"euler_ancestral\\",<br>\\n\\"simple\\",<br>\\n1<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n83,<br>\\n34,<br>\\n1,<br>\\n33,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n86,<br>\\n36,<br>\\n0,<br>\\n33,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n88,<br>\\n3,<br>\\n0,<br>\\n36,<br>\\n1,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n98,<br>\\n33,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n108,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n113,<br>\\n42,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n114,<br>\\n42,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n118,<br>\\n49,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n119,<br>\\n49,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n120,<br>\\n49,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n121,<br>\\n49,<br>\\n3,<br>\\n50,<br>\\n0,<br>\\n\\"CLIP_VISION\\"<br>\\n],<br>\\n[<br>\\n123,<br>\\n34,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n124,<br>\\n50,<br>\\n0,<br>\\n51,<br>\\n1,<br>\\n\\"CLIP_VISION_OUTPUT\\"<br>\\n],<br>\\n[<br>\\n125,<br>\\n6,<br>\\n0,<br>\\n51,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n128,<br>\\n6,<br>\\n0,<br>\\n36,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n129,<br>\\n7,<br>\\n0,<br>\\n33,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n130,<br>\\n8,<br>\\n0,<br>\\n52,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n131,<br>\\n53,<br>\\n0,<br>\\n50,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n132,<br>\\n49,<br>\\n3,<br>\\n54,<br>\\n0,<br>\\n\\"CLIP_VISION\\"<br>\\n],<br>\\n[<br>\\n133,<br>\\n56,<br>\\n0,<br>\\n54,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n135,<br>\\n54,<br>\\n0,<br>\\n55,<br>\\n1,<br>\\n\\"CLIP_VISION_OUTPUT\\"<br>\\n],<br>\\n[<br>\\n136,<br>\\n51,<br>\\n0,<br>\\n55,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n137,<br>\\n55,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Mix【Zho】.json","value":{"title":"Stable Cascade ImagePrompt Mix【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Mix【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{I as comp,d as data};

import{_ as r,e,h as b,r as t,o}from"./app-CbGUE4hV.js";const a={};function s(i,p){const n=t("VueFlow");return o(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 53,
  "last_link_id": 131,
  "nodes": [
    {
      "id": 53,
      "type": "LoadImage",
      "pos": [
        -800,
        500
      ],
      "size": [
        360,
        460
      ],
      "flags": {},
      "order": 0,
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
      "id": 34,
      "type": "StableCascade_EmptyLatentImage",
      "pos": [
        -800,
        300
      ],
      "size": [
        360,
        150
      ],
      "flags": {},
      "order": 1,
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
      "size": [
        360,
        120
      ],
      "flags": {},
      "order": 2,
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
            121
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
      "id": 3,
      "type": "KSampler",
      "pos": [
        -420,
        700
      ],
      "size": [
        300,
        260
      ],
      "flags": {},
      "order": 8,
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
          "link": 126
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
        471061135815807,
        "randomize",
        20,
        4,
        "euler_ancestral",
        "simple",
        1
      ]
    },
    {
      "id": 51,
      "type": "unCLIPConditioning",
      "pos": [
        -420,
        550
      ],
      "size": [
        300,
        100
      ],
      "flags": {},
      "order": 7,
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
            126
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
        450
      ],
      "size": [
        300,
        50
      ],
      "flags": {},
      "order": 6,
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
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        -420,
        310
      ],
      "size": [
        300,
        90
      ],
      "flags": {},
      "order": 5,
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
        -420,
        130
      ],
      "size": [
        300,
        130
      ],
      "flags": {},
      "order": 4,
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
        -100,
        910
      ],
      "size": [
        350,
        50
      ],
      "flags": {},
      "order": 11,
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
        -100,
        130
      ],
      "size": [
        350,
        130
      ],
      "flags": {},
      "order": 3,
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
      "id": 36,
      "type": "StableCascade_StageB_Conditioning",
      "pos": [
        -100,
        310
      ],
      "size": [
        350,
        60
      ],
      "flags": {},
      "order": 9,
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
      "id": 33,
      "type": "KSampler",
      "pos": [
        -100,
        420
      ],
      "size": [
        350,
        440
      ],
      "flags": {},
      "order": 10,
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
        784371755620730,
        "randomize",
        10,
        1.1,
        "euler_ancestral",
        "simple",
        1
      ]
    },
    {
      "id": 52,
      "type": "PreviewImage",
      "pos": [
        270,
        130
      ],
      "size": [
        800,
        830
      ],
      "flags": {},
      "order": 12,
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
      126,
      51,
      0,
      3,
      1,
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
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const l=r(a,[["render",s],["__file","Stable Cascade ImagePrompt Standard【Zho】.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20ImagePrompt%20Standard%E3%80%90Zho%E3%80%91.json.html","title":"Stable Cascade ImagePrompt Standard【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 53, \\"last_link_id\\": 131, \\"nodes\\": [ { \\"id\\": 53, \\"type\\": \\"LoadImage\\", \\"pos\\": [ -800, 500 ], \\"size\\": [ 360, 460 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\":...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20ImagePrompt%20Standard%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 53, \\"last_link_id\\": 131, \\"nodes\\": [ { \\"id\\": 53, \\"type\\": \\"LoadImage\\", \\"pos\\": [ -800, 500 ], \\"size\\": [ 360, 460 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\":..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.6,"words":779},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Standard【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 53,<br>\\n\\"last_link_id\\": 131,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 53,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-800,<br>\\n500<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n460<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n131<br>\\n],<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI_temp_pcyxc_00007_.png\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 34,<br>\\n\\"type\\": \\"StableCascade_EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n-800,<br>\\n300<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n150<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"stage_c\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n123<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"stage_b\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n83<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StableCascade_EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1024,<br>\\n42,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 49,<br>\\n\\"type\\": \\"unCLIPCheckpointLoader\\",<br>\\n\\"pos\\": [<br>\\n-800,<br>\\n130<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n120<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n118<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n119,<br>\\n120<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP_VISION\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"links\\": [<br>\\n121<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"unCLIPCheckpointLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"stable_cascade_stage_c.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n700<br>\\n],<br>\\n\\"size\\": [<br>\\n300,<br>\\n260<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 118,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 126<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 108<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 123<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n88<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n471061135815807,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n4,<br>\\n\\"euler_ancestral\\",<br>\\n\\"simple\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 51,<br>\\n\\"type\\": \\"unCLIPConditioning\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n550<br>\\n],<br>\\n\\"size\\": [<br>\\n300,<br>\\n100<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 125<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip_vision_output\\",<br>\\n\\"type\\": \\"CLIP_VISION_OUTPUT\\",<br>\\n\\"link\\": 124<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n126<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"unCLIPConditioning\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1,<br>\\n0<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 50,<br>\\n\\"type\\": \\"CLIPVisionEncode\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n450<br>\\n],<br>\\n\\"size\\": [<br>\\n300,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip_vision\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"link\\": 121<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 131,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP_VISION_OUTPUT\\",<br>\\n\\"type\\": \\"CLIP_VISION_OUTPUT\\",<br>\\n\\"links\\": [<br>\\n124<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPVisionEncode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n310<br>\\n],<br>\\n\\"size\\": [<br>\\n300,<br>\\n90<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 120<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n108,<br>\\n129<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Negative Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"text, watermark\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-420,<br>\\n130<br>\\n],<br>\\n\\"size\\": [<br>\\n300,<br>\\n130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 119<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n125,<br>\\n128<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"cute cat cartoon\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n-100,<br>\\n910<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 98<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 114,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n130<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 42,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-100,<br>\\n130<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n113<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n114<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"stable_cascade_stage_b.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 36,<br>\\n\\"type\\": \\"StableCascade_StageB_Conditioning\\",<br>\\n\\"pos\\": [<br>\\n-100,<br>\\n310<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n60<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 128<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"stage_c\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 88<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n86<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StableCascade_StageB_Conditioning\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 33,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-100,<br>\\n420<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n440<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 113,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 86<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 129<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 83<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n98<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n784371755620730,<br>\\n\\"randomize\\",<br>\\n10,<br>\\n1.1,<br>\\n\\"euler_ancestral\\",<br>\\n\\"simple\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 52,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n270,<br>\\n130<br>\\n],<br>\\n\\"size\\": [<br>\\n800,<br>\\n830<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 130<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n83,<br>\\n34,<br>\\n1,<br>\\n33,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n86,<br>\\n36,<br>\\n0,<br>\\n33,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n88,<br>\\n3,<br>\\n0,<br>\\n36,<br>\\n1,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n98,<br>\\n33,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n108,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n113,<br>\\n42,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n114,<br>\\n42,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n118,<br>\\n49,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n119,<br>\\n49,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n120,<br>\\n49,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n121,<br>\\n49,<br>\\n3,<br>\\n50,<br>\\n0,<br>\\n\\"CLIP_VISION\\"<br>\\n],<br>\\n[<br>\\n123,<br>\\n34,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n124,<br>\\n50,<br>\\n0,<br>\\n51,<br>\\n1,<br>\\n\\"CLIP_VISION_OUTPUT\\"<br>\\n],<br>\\n[<br>\\n125,<br>\\n6,<br>\\n0,<br>\\n51,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n126,<br>\\n51,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n128,<br>\\n6,<br>\\n0,<br>\\n36,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n129,<br>\\n7,<br>\\n0,<br>\\n33,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n130,<br>\\n8,<br>\\n0,<br>\\n52,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n131,<br>\\n53,<br>\\n0,<br>\\n50,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Standard【Zho】.json","value":{"title":"Stable Cascade ImagePrompt Standard【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Standard【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{l as comp,m as data};

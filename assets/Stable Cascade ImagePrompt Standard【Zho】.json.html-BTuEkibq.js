import{_ as e,c as t,b as o,o as a,r as s}from"./app-DOwvp1dV.js";const i={};function p(d,l){const n=s("VueFlow");return a(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(i,[["render",p],["__file","Stable Cascade ImagePrompt Standard【Zho】.json.html.vue"]]),I=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20ImagePrompt%20Standard%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 53, \\"last_link_id\\": 131, \\"nodes\\": [ { \\"id\\": 53, \\"type\\": \\"LoadImage\\", \\"pos\\": [ -800, 500 ], \\"size\\": [ 360, 460 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\":...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20ImagePrompt%20Standard%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 53, \\"last_link_id\\": 131, \\"nodes\\": [ { \\"id\\": 53, \\"type\\": \\"LoadImage\\", \\"pos\\": [ -800, 500 ], \\"size\\": [ 360, 460 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\":..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.6,"words":779},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Standard【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 53,\\n\\"last_link_id\\": 131,\\n\\"nodes\\": [\\n{\\n\\"id\\": 53,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n-800,\\n500\\n],\\n\\"size\\": [\\n360,\\n460\\n],\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n131\\n],\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI_temp_pcyxc_00007_.png\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 34,\\n\\"type\\": \\"StableCascade_EmptyLatentImage\\",\\n\\"pos\\": [\\n-800,\\n300\\n],\\n\\"size\\": [\\n360,\\n150\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"stage_c\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n123\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"stage_b\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n83\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"StableCascade_EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1024,\\n42,\\n1\\n]\\n},\\n{\\n\\"id\\": 49,\\n\\"type\\": \\"unCLIPCheckpointLoader\\",\\n\\"pos\\": [\\n-800,\\n130\\n],\\n\\"size\\": [\\n360,\\n120\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n118\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n119,\\n120\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"CLIP_VISION\\",\\n\\"type\\": \\"CLIP_VISION\\",\\n\\"links\\": [\\n121\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"unCLIPCheckpointLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"stable_cascade_stage_c.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n-420,\\n700\\n],\\n\\"size\\": [\\n300,\\n260\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 118,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 126\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 108\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 123\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n88\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n471061135815807,\\n\\"randomize\\",\\n20,\\n4,\\n\\"euler_ancestral\\",\\n\\"simple\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 51,\\n\\"type\\": \\"unCLIPConditioning\\",\\n\\"pos\\": [\\n-420,\\n550\\n],\\n\\"size\\": [\\n300,\\n100\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 125\\n},\\n{\\n\\"name\\": \\"clip_vision_output\\",\\n\\"type\\": \\"CLIP_VISION_OUTPUT\\",\\n\\"link\\": 124\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n126\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"unCLIPConditioning\\"\\n},\\n\\"widgets_values\\": [\\n1,\\n0\\n]\\n},\\n{\\n\\"id\\": 50,\\n\\"type\\": \\"CLIPVisionEncode\\",\\n\\"pos\\": [\\n-420,\\n450\\n],\\n\\"size\\": [\\n300,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip_vision\\",\\n\\"type\\": \\"CLIP_VISION\\",\\n\\"link\\": 121\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 131,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP_VISION_OUTPUT\\",\\n\\"type\\": \\"CLIP_VISION_OUTPUT\\",\\n\\"links\\": [\\n124\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPVisionEncode\\"\\n}\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-420,\\n310\\n],\\n\\"size\\": [\\n300,\\n90\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 120\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n108,\\n129\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Negative Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"text, watermark\\"\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-420,\\n130\\n],\\n\\"size\\": [\\n300,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 119\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n125,\\n128\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"cute cat cartoon\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n-100,\\n910\\n],\\n\\"size\\": [\\n350,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 98\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 114,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n130\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 42,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-100,\\n130\\n],\\n\\"size\\": [\\n350,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n113\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n114\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"stable_cascade_stage_b.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 36,\\n\\"type\\": \\"StableCascade_StageB_Conditioning\\",\\n\\"pos\\": [\\n-100,\\n310\\n],\\n\\"size\\": [\\n350,\\n60\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 128\\n},\\n{\\n\\"name\\": \\"stage_c\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 88\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n86\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"StableCascade_StageB_Conditioning\\"\\n}\\n},\\n{\\n\\"id\\": 33,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n-100,\\n420\\n],\\n\\"size\\": [\\n350,\\n440\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 113,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 86\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 129\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 83\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n98\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n784371755620730,\\n\\"randomize\\",\\n10,\\n1.1,\\n\\"euler_ancestral\\",\\n\\"simple\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 52,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n270,\\n130\\n],\\n\\"size\\": [\\n800,\\n830\\n],\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 130\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n}\\n],\\n\\"links\\": [\\n[\\n83,\\n34,\\n1,\\n33,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n86,\\n36,\\n0,\\n33,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n88,\\n3,\\n0,\\n36,\\n1,\\n\\"LATENT\\"\\n],\\n[\\n98,\\n33,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n108,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n113,\\n42,\\n0,\\n33,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n114,\\n42,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n118,\\n49,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n119,\\n49,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n120,\\n49,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n121,\\n49,\\n3,\\n50,\\n0,\\n\\"CLIP_VISION\\"\\n],\\n[\\n123,\\n34,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n124,\\n50,\\n0,\\n51,\\n1,\\n\\"CLIP_VISION_OUTPUT\\"\\n],\\n[\\n125,\\n6,\\n0,\\n51,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n126,\\n51,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n128,\\n6,\\n0,\\n36,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n129,\\n7,\\n0,\\n33,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n130,\\n8,\\n0,\\n52,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n131,\\n53,\\n0,\\n50,\\n1,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Standard【Zho】.json","value":{"title":"Stable Cascade ImagePrompt Standard【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Standard【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,I as data};

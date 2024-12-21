import{_ as e,c as t,e as o,o as s,r as a}from"./app-DxUtpnUG.js";const i={};function p(l,r){const n=a("VueFlow");return s(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 53,
  "last_link_id": 128,
  "nodes": [
    {
      "id": 52,
      "type": "PreviewImage",
      "pos": [
        -410,
        1100
      ],
      "size": [
        500,
        530
      ],
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 125
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 51,
      "type": "PreviewImage",
      "pos": [
        -930,
        1100
      ],
      "size": [
        500,
        530
      ],
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 127
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 33,
      "type": "KSampler",
      "pos": [
        -260,
        690
      ],
      "size": [
        350,
        260
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
        82297270872947,
        "randomize",
        10,
        1.1,
        "euler_ancestral",
        "simple",
        1
      ]
    },
    {
      "id": 42,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -260,
        540
      ],
      "size": {
        "0": 349.90911865234375,
        "1": 98
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
        -260,
        1000
      ],
      "size": [
        350,
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
            125
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
      "type": "AIO_Preprocessor",
      "pos": [
        -2444,
        782
      ],
      "size": [
        350,
        80
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
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
        "Node name for S&R": "AIO_Preprocessor"
      },
      "widgets_values": [
        "CannyEdgePreprocessor",
        512
      ]
    },
    {
      "id": 41,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -1390,
        540
      ],
      "size": [
        370,
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
        -1390,
        690
      ],
      "size": [
        370,
        180
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
      "id": 53,
      "type": "CannyEdgePreprocessor",
      "pos": [
        -1390,
        920
      ],
      "size": [
        370,
        130
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 126
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            127,
            128
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CannyEdgePreprocessor"
      },
      "widgets_values": [
        100,
        200,
        512
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        -630,
        690
      ],
      "size": [
        340,
        260
      ],
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
          "link": 123
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 108
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
        665481010178584,
        "randomize",
        20,
        4,
        "euler_ancestral",
        "simple",
        1
      ]
    },
    {
      "id": 47,
      "type": "ControlNetApply",
      "pos": [
        -630,
        540
      ],
      "size": [
        340,
        100
      ],
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 122,
          "slot_index": 0
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 118,
          "slot_index": 1
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 128,
          "slot_index": 2
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            123
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        1
      ]
    },
    {
      "id": 36,
      "type": "StableCascade_StageB_Conditioning",
      "pos": [
        -630,
        1000
      ],
      "size": [
        340,
        50
      ],
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
      "id": 48,
      "type": "ControlNetLoader",
      "pos": [
        -1000,
        540
      ],
      "size": [
        350,
        70
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            118
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "sccanny.safetensors"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        -1000,
        970
      ],
      "size": [
        350,
        80
      ],
      "flags": {},
      "order": 7,
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
            108,
            117
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
      "id": 49,
      "type": "LoadImage",
      "pos": [
        -1390,
        1100
      ],
      "size": [
        440,
        530
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            126
          ],
          "shape": 3,
          "slot_index": 0
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
        "ComfyUI_temp_eigxs_00008_.png",
        "image"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        -1000,
        660
      ],
      "size": [
        350,
        260
      ],
      "flags": {},
      "order": 6,
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
            122
          ],
          "slot_index": 0
        }
      ],
      "title": "CLIP Text Encode (Positive Prompt)",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "an avocado, galaxy"
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
      108,
      7,
      0,
      3,
      2,
      "CONDITIONING"
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
      48,
      0,
      47,
      1,
      "CONTROL_NET"
    ],
    [
      122,
      6,
      0,
      47,
      0,
      "CONDITIONING"
    ],
    [
      123,
      47,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      125,
      8,
      0,
      52,
      0,
      "IMAGE"
    ],
    [
      126,
      49,
      0,
      53,
      0,
      "IMAGE"
    ],
    [
      127,
      53,
      0,
      51,
      0,
      "IMAGE"
    ],
    [
      128,
      53,
      0,
      47,
      2,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const m=e(i,[["render",p],["__file","Stable Cascade Canny ControlNet【Zho】.json.html.vue"]]),N=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Canny%20ControlNet%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 53, \\"last_link_id\\": 128, \\"nodes\\": [ { \\"id\\": 52, \\"type\\": \\"PreviewImage\\", \\"pos\\": [ -410, 1100 ], \\"size\\": [ 500, 530 ], \\"flags\\": {}, \\"order\\": 15, \\"mode\\": 0, \\"inpu...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Canny%20ControlNet%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 53, \\"last_link_id\\": 128, \\"nodes\\": [ { \\"id\\": 52, \\"type\\": \\"PreviewImage\\", \\"pos\\": [ -410, 1100 ], \\"size\\": [ 500, 530 ], \\"flags\\": {}, \\"order\\": 15, \\"mode\\": 0, \\"inpu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.98,"words":895},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Canny ControlNet【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 53,\\n\\"last_link_id\\": 128,\\n\\"nodes\\": [\\n{\\n\\"id\\": 52,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n-410,\\n1100\\n],\\n\\"size\\": [\\n500,\\n530\\n],\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 125\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 51,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n-930,\\n1100\\n],\\n\\"size\\": [\\n500,\\n530\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 127\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 33,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n-260,\\n690\\n],\\n\\"size\\": [\\n350,\\n260\\n],\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 113,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 86\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 117\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 83\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n98\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n82297270872947,\\n\\"randomize\\",\\n10,\\n1.1,\\n\\"euler_ancestral\\",\\n\\"simple\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 42,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-260,\\n540\\n],\\n\\"size\\": {\\n\\"0\\": 349.90911865234375,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n113\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n114\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"stable_cascade_stage_b.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n-260,\\n1000\\n],\\n\\"size\\": [\\n350,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 98\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 114,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n125\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 50,\\n\\"type\\": \\"AIO_Preprocessor\\",\\n\\"pos\\": [\\n-2444,\\n782\\n],\\n\\"size\\": [\\n350,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"AIO_Preprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"CannyEdgePreprocessor\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 41,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-1390,\\n540\\n],\\n\\"size\\": [\\n370,\\n100\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n110\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n111,\\n112\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"stable_cascade_stage_c.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 34,\\n\\"type\\": \\"StableCascade_EmptyLatentImage\\",\\n\\"pos\\": [\\n-1390,\\n690\\n],\\n\\"size\\": [\\n370,\\n180\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"stage_c\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n82\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"stage_b\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n83\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"StableCascade_EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1024,\\n42,\\n1\\n]\\n},\\n{\\n\\"id\\": 53,\\n\\"type\\": \\"CannyEdgePreprocessor\\",\\n\\"pos\\": [\\n-1390,\\n920\\n],\\n\\"size\\": [\\n370,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 126\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n127,\\n128\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CannyEdgePreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n100,\\n200,\\n512\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n-630,\\n690\\n],\\n\\"size\\": [\\n340,\\n260\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 110,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 123\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 108\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 82\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n88\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n665481010178584,\\n\\"randomize\\",\\n20,\\n4,\\n\\"euler_ancestral\\",\\n\\"simple\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 47,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": [\\n-630,\\n540\\n],\\n\\"size\\": [\\n340,\\n100\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 122,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 118,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 128,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n123\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n1\\n]\\n},\\n{\\n\\"id\\": 36,\\n\\"type\\": \\"StableCascade_StageB_Conditioning\\",\\n\\"pos\\": [\\n-630,\\n1000\\n],\\n\\"size\\": [\\n340,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 116,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"stage_c\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 88\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n86\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"StableCascade_StageB_Conditioning\\"\\n}\\n},\\n{\\n\\"id\\": 48,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n-1000,\\n540\\n],\\n\\"size\\": [\\n350,\\n70\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n118\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"sccanny.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-1000,\\n970\\n],\\n\\"size\\": [\\n350,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 112\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n108,\\n117\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Negative Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"text, watermark\\"\\n]\\n},\\n{\\n\\"id\\": 49,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n-1390,\\n1100\\n],\\n\\"size\\": [\\n440,\\n530\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n126\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI_temp_eigxs_00008_.png\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-1000,\\n660\\n],\\n\\"size\\": [\\n350,\\n260\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 111\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n116,\\n122\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"an avocado, galaxy\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n82,\\n34,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n83,\\n34,\\n1,\\n33,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n86,\\n36,\\n0,\\n33,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n88,\\n3,\\n0,\\n36,\\n1,\\n\\"LATENT\\"\\n],\\n[\\n98,\\n33,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n108,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n110,\\n41,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n111,\\n41,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n112,\\n41,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n113,\\n42,\\n0,\\n33,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n114,\\n42,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n116,\\n6,\\n0,\\n36,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n117,\\n7,\\n0,\\n33,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n118,\\n48,\\n0,\\n47,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n122,\\n6,\\n0,\\n47,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n123,\\n47,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n125,\\n8,\\n0,\\n52,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n126,\\n49,\\n0,\\n53,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n127,\\n53,\\n0,\\n51,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n128,\\n53,\\n0,\\n47,\\n2,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,N as data};

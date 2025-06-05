import{_ as r,c as e,d as b,r as t,o as a}from"./app-C-Lad9Ru.js";const s={};function o(i,p){const n=t("VueFlow");return a(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 56,
  "last_link_id": 144,
  "nodes": [
    {
      "id": 34,
      "type": "StableCascade_EmptyLatentImage",
      "pos": [
        -1390,
        910
      ],
      "size": {
        "0": 370,
        "1": 180
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "stage_c",
          "type": "LATENT",
          "links": [],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "stage_b",
          "type": "LATENT",
          "links": [],
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
      "id": 55,
      "type": "StableCascade_StageC_VAEEncode",
      "pos": [
        -1390,
        1140
      ],
      "size": [
        370,
        80
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 144
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 140,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "stage_c",
          "type": "LATENT",
          "links": [
            141
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "stage_b",
          "type": "LATENT",
          "links": [
            142
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "StableCascade_StageC_VAEEncode"
      },
      "widgets_values": [
        42
      ]
    },
    {
      "id": 41,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -1390,
        760
      ],
      "size": {
        "0": 370,
        "1": 100
      },
      "flags": {},
      "order": 1,
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
          "links": [
            140
          ],
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
      "id": 36,
      "type": "StableCascade_StageB_Conditioning",
      "pos": [
        -1000,
        1290
      ],
      "size": [
        340,
        60
      ],
      "flags": {},
      "order": 8,
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
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        -1390,
        1270
      ],
      "size": [
        370,
        80
      ],
      "flags": {},
      "order": 5,
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
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        -1000,
        760
      ],
      "size": [
        340,
        170
      ],
      "flags": {},
      "order": 4,
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
            143
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
    },
    {
      "id": 42,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -640,
        760
      ],
      "size": [
        340,
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
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        -640,
        1300
      ],
      "size": [
        340,
        50
      ],
      "flags": {},
      "order": 10,
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
      "id": 49,
      "type": "LoadImage",
      "pos": [
        -1390,
        1400
      ],
      "size": [
        500,
        600
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            144
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "ComfyUI_temp_eigxs_00009_.png",
        "image"
      ]
    },
    {
      "id": 52,
      "type": "PreviewImage",
      "pos": [
        -870,
        1400
      ],
      "size": [
        570,
        600
      ],
      "flags": {},
      "order": 11,
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
      "id": 3,
      "type": "KSampler",
      "pos": [
        -1000,
        980
      ],
      "size": {
        "0": 340,
        "1": 262
      },
      "flags": {},
      "order": 7,
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
          "link": 143
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 108
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 141
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
        848748346553826,
        "randomize",
        20,
        4,
        "euler_ancestral",
        "simple",
        0.5
      ]
    },
    {
      "id": 33,
      "type": "KSampler",
      "pos": [
        -640,
        910
      ],
      "size": [
        340,
        340
      ],
      "flags": {},
      "order": 9,
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
          "link": 142
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
        206604063358636,
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
      125,
      8,
      0,
      52,
      0,
      "IMAGE"
    ],
    [
      140,
      41,
      2,
      55,
      1,
      "VAE"
    ],
    [
      141,
      55,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      142,
      55,
      1,
      33,
      3,
      "LATENT"
    ],
    [
      143,
      6,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      144,
      49,
      0,
      55,
      0,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const d=r(s,[["render",o]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Img2Img%E3%80%90Zho%E3%80%91.json.html","title":"Stable Cascade Img2Img【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 56, \\"last_link_id\\": 144, \\"nodes\\": [ { \\"id\\": 34, \\"type\\": \\"StableCascade_EmptyLatentImage\\", \\"pos\\": [ -1390, 910 ], \\"size\\": { \\"0\\": 370, \\"1\\": 180 }, \\"flags\\": {}, \\"...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Img2Img%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 56, \\"last_link_id\\": 144, \\"nodes\\": [ { \\"id\\": 34, \\"type\\": \\"StableCascade_EmptyLatentImage\\", \\"pos\\": [ -1390, 910 ], \\"size\\": { \\"0\\": 370, \\"1\\": 180 }, \\"flags\\": {}, \\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.43,"words":729},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Img2Img【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 56,<br>\\n\\"last_link_id\\": 144,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 34,<br>\\n\\"type\\": \\"StableCascade_EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n-1390,<br>\\n910<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 370,<br>\\n\\"1\\": 180<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"stage_c\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"stage_b\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StableCascade_EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1024,<br>\\n42,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 55,<br>\\n\\"type\\": \\"StableCascade_StageC_VAEEncode\\",<br>\\n\\"pos\\": [<br>\\n-1390,<br>\\n1140<br>\\n],<br>\\n\\"size\\": [<br>\\n370,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 144<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 140,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"stage_c\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n141<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"stage_b\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n142<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StableCascade_StageC_VAEEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n42<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 41,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-1390,<br>\\n760<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 370,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n110<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n111,<br>\\n112<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n140<br>\\n],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"stable_cascade_stage_c.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 36,<br>\\n\\"type\\": \\"StableCascade_StageB_Conditioning\\",<br>\\n\\"pos\\": [<br>\\n-1000,<br>\\n1290<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n60<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 116,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"stage_c\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 88<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n86<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StableCascade_StageB_Conditioning\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-1390,<br>\\n1270<br>\\n],<br>\\n\\"size\\": [<br>\\n370,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 112<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n108,<br>\\n117<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Negative Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"text, watermark\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-1000,<br>\\n760<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n170<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 111<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n116,<br>\\n143<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"an avocado, galaxy\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 42,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-640,<br>\\n760<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n100<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n113<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n114<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"stable_cascade_stage_b.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n-640,<br>\\n1300<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 98<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 114,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n125<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 49,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-1390,<br>\\n1400<br>\\n],<br>\\n\\"size\\": [<br>\\n500,<br>\\n600<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n144<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI_temp_eigxs_00009_.png\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 52,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n-870,<br>\\n1400<br>\\n],<br>\\n\\"size\\": [<br>\\n570,<br>\\n600<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 125<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-1000,<br>\\n980<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 340,<br>\\n\\"1\\": 262<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 110,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 143<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 108<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 141<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n88<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n848748346553826,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n4,<br>\\n\\"euler_ancestral\\",<br>\\n\\"simple\\",<br>\\n0.5<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 33,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-640,<br>\\n910<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n340<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 113,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 86<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 117<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 142<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n98<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n206604063358636,<br>\\n\\"randomize\\",<br>\\n10,<br>\\n1.1,<br>\\n\\"euler_ancestral\\",<br>\\n\\"simple\\",<br>\\n1<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n86,<br>\\n36,<br>\\n0,<br>\\n33,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n88,<br>\\n3,<br>\\n0,<br>\\n36,<br>\\n1,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n98,<br>\\n33,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n108,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n110,<br>\\n41,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n111,<br>\\n41,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n112,<br>\\n41,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n113,<br>\\n42,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n114,<br>\\n42,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n116,<br>\\n6,<br>\\n0,<br>\\n36,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n117,<br>\\n7,<br>\\n0,<br>\\n33,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n125,<br>\\n8,<br>\\n0,<br>\\n52,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n140,<br>\\n41,<br>\\n2,<br>\\n55,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n141,<br>\\n55,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n142,<br>\\n55,<br>\\n1,<br>\\n33,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n143,<br>\\n6,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n144,<br>\\n49,<br>\\n0,<br>\\n55,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Img2Img【Zho】.json","value":{"title":"Stable Cascade Img2Img【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Img2Img【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

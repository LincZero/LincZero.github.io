import{_ as r,c as e,d as b,r as t,o}from"./app-CHIZAOA_.js";const s={};function i(a,p){const n=t("VueFlow");return o(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 66,
  "last_link_id": 118,
  "nodes": [
    {
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": [
        540,
        -60
      ],
      "size": {
        "0": 320,
        "1": 110
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            99
          ],
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [],
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            53
          ],
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "sd3_medium.safetensors"
      ]
    },
    {
      "id": 54,
      "type": "PreviewImage",
      "pos": [
        1300,
        -230
      ],
      "size": [
        690,
        1130
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 101
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 66,
      "type": "PortraitMaster_中文版",
      "pos": [
        880,
        -230
      ],
      "size": [
        400,
        1133.999984741211
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "positive",
          "type": "STRING",
          "links": [
            117
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "STRING",
          "links": [
            118
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "PortraitMaster_中文版"
      },
      "widgets_values": [
        "肩部以上肖像",
        1.5,
        "女性",
        21,
        "法国人",
        "-",
        0.5,
        "正常",
        0.88,
        "-",
        "灰色",
        "开心",
        1.6,
        "椭圆形",
        0.77,
        0.2,
        "柠檬辫",
        "黑色",
        0.67,
        "-",
        0.53,
        0.35000000000000003,
        0.44,
        0,
        0,
        0,
        0,
        0,
        0.2,
        1.17,
        1.17,
        1.2,
        1.16,
        "摄影棚灯光",
        "从左侧",
        1.1500000000000001,
        "disable",
        "raw photo, (realistic:1.5), (white dress:1.1)",
        "(white background:1.5)",
        "",
        ""
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        540,
        850
      ],
      "size": {
        "0": 320,
        "1": 50
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 7
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 53,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            101
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        540,
        510
      ],
      "size": [
        320,
        290
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 99,
          "slot_index": 0
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 21
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 80
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 100
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        352524171987734,
        "randomize",
        30,
        5.45,
        "euler",
        "sgm_uniform",
        1
      ]
    },
    {
      "id": 53,
      "type": "EmptySD3LatentImage",
      "pos": [
        540,
        350
      ],
      "size": [
        320,
        110
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            100
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptySD3LatentImage"
      },
      "widgets_values": [
        960,
        1536,
        1
      ]
    },
    {
      "id": 40,
      "type": "CLIPTextEncode",
      "pos": [
        540,
        220
      ],
      "size": [
        320,
        80
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 97
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 118,
          "widget": {
            "name": "text"
          }
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            80
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "title": "Negative Prompt",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        ""
      ]
    },
    {
      "id": 16,
      "type": "CLIPTextEncode",
      "pos": [
        540,
        100
      ],
      "size": [
        320,
        70
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 96
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 117,
          "widget": {
            "name": "text"
          },
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            21
          ],
          "slot_index": 0
        }
      ],
      "title": "Positive Prompt",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "highly realistic vintage book cover with a textured black background. At the top, the title 'COMFYPARK' is styled in a sharp, classic stylized font. Near the bottom, the author name 'ZHO' appears in a smaller, elegant serif font. The cover should look exceptionally real with enhanced crispness in the text, showing clear signs of wear such as slightly frayed edges and subtle distress marks. The overall appearance should mimic a well-preserved, old academic book, with a focus on high fidelity in the material texture and color depth."
      ]
    },
    {
      "id": 43,
      "type": "TripleCLIPLoader",
      "pos": [
        540,
        -230
      ],
      "size": [
        320,
        120
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            96,
            97
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "TripleCLIPLoader"
      },
      "widgets_values": [
        "clip_l.safetensors",
        "clip_g.safetensors",
        "t5xxl_fp16.safetensors"
      ]
    }
  ],
  "links": [
    [
      7,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      21,
      16,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      53,
      4,
      2,
      8,
      1,
      "VAE"
    ],
    [
      80,
      40,
      0,
      3,
      2,
      "CONDITIONING"
    ],
    [
      96,
      43,
      0,
      16,
      0,
      "CLIP"
    ],
    [
      97,
      43,
      0,
      40,
      0,
      "CLIP"
    ],
    [
      99,
      4,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      100,
      53,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      101,
      8,
      0,
      54,
      0,
      "IMAGE"
    ],
    [
      117,
      66,
      0,
      16,
      1,
      "STRING"
    ],
    [
      118,
      66,
      1,
      40,
      1,
      "STRING"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        -222.98930611416245,
        406.91532321620105
      ]
    }
  },
  "version": 0.4
}
`})])}const d=r(s,[["render",i]]),m=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20Medium%20_%20%E8%82%96%E5%83%8F%E5%A4%A7%E5%B8%88%EF%BC%88%E4%B8%AD%E6%96%87%E7%89%88%EF%BC%89%E3%80%90Zho%E3%80%91.json.html","title":"SD3 Medium _ 肖像大师（中文版）【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 66, \\"last_link_id\\": 118, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": [ 540, -60 ], \\"size\\": { \\"0\\": 320, \\"1\\": 110 }, \\"flags\\": {}, \\"order\\": 0, ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20Medium%20_%20%E8%82%96%E5%83%8F%E5%A4%A7%E5%B8%88%EF%BC%88%E4%B8%AD%E6%96%87%E7%89%88%EF%BC%89%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 66, \\"last_link_id\\": 118, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": [ 540, -60 ], \\"size\\": { \\"0\\": 320, \\"1\\": 110 }, \\"flags\\": {}, \\"order\\": 0, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.2,"words":661},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + 肖像大师（中文版）【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 66,<br>\\n\\"last_link_id\\": 118,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n540,<br>\\n-60<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n99<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n53<br>\\n],<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"sd3_medium.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 54,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1300,<br>\\n-230<br>\\n],<br>\\n\\"size\\": [<br>\\n690,<br>\\n1130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 101<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 66,<br>\\n\\"type\\": \\"PortraitMaster_中文版\\",<br>\\n\\"pos\\": [<br>\\n880,<br>\\n-230<br>\\n],<br>\\n\\"size\\": [<br>\\n400,<br>\\n1133.999984741211<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n117<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n118<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PortraitMaster_中文版\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"肩部以上肖像\\",<br>\\n1.5,<br>\\n\\"女性\\",<br>\\n21,<br>\\n\\"法国人\\",<br>\\n\\"-\\",<br>\\n0.5,<br>\\n\\"正常\\",<br>\\n0.88,<br>\\n\\"-\\",<br>\\n\\"灰色\\",<br>\\n\\"开心\\",<br>\\n1.6,<br>\\n\\"椭圆形\\",<br>\\n0.77,<br>\\n0.2,<br>\\n\\"柠檬辫\\",<br>\\n\\"黑色\\",<br>\\n0.67,<br>\\n\\"-\\",<br>\\n0.53,<br>\\n0.35000000000000003,<br>\\n0.44,<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n0.2,<br>\\n1.17,<br>\\n1.17,<br>\\n1.2,<br>\\n1.16,<br>\\n\\"摄影棚灯光\\",<br>\\n\\"从左侧\\",<br>\\n1.1500000000000001,<br>\\n\\"disable\\",<br>\\n\\"raw photo, (realistic:1.5), (white dress:1.1)\\",<br>\\n\\"(white background:1.5)\\",<br>\\n\\"\\",<br>\\n\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n540,<br>\\n850<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 50<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 7<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 53,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n101<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n540,<br>\\n510<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n290<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 99,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 21<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 80<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 100<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n352524171987734,<br>\\n\\"randomize\\",<br>\\n30,<br>\\n5.45,<br>\\n\\"euler\\",<br>\\n\\"sgm_uniform\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 53,<br>\\n\\"type\\": \\"EmptySD3LatentImage\\",<br>\\n\\"pos\\": [<br>\\n540,<br>\\n350<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n100<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n960,<br>\\n1536,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 40,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n540,<br>\\n220<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 97<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 118,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n80<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Negative Prompt\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n540,<br>\\n100<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n70<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 96<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 117,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n21<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Positive Prompt\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"highly realistic vintage book cover with a textured black background. At the top, the title 'COMFYPARK' is styled in a sharp, classic stylized font. Near the bottom, the author name 'ZHO' appears in a smaller, elegant serif font. The cover should look exceptionally real with enhanced crispness in the text, showing clear signs of wear such as slightly frayed edges and subtle distress marks. The overall appearance should mimic a well-preserved, old academic book, with a focus on high fidelity in the material texture and color depth.\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 43,<br>\\n\\"type\\": \\"TripleCLIPLoader\\",<br>\\n\\"pos\\": [<br>\\n540,<br>\\n-230<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n120<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n96,<br>\\n97<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"TripleCLIPLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"clip_l.safetensors\\",<br>\\n\\"clip_g.safetensors\\",<br>\\n\\"t5xxl_fp16.safetensors\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n16,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n53,<br>\\n4,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n80,<br>\\n40,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n96,<br>\\n43,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n97,<br>\\n43,<br>\\n0,<br>\\n40,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n99,<br>\\n4,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n100,<br>\\n53,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n101,<br>\\n8,<br>\\n0,<br>\\n54,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n117,<br>\\n66,<br>\\n0,<br>\\n16,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n118,<br>\\n66,<br>\\n1,<br>\\n40,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 1,<br>\\n\\"offset\\": [<br>\\n-222.98930611416245,<br>\\n406.91532321620105<br>\\n]<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + 肖像大师（中文版）【Zho】.json","value":{"title":"SD3 Medium + 肖像大师（中文版）【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + 肖像大师（中文版）【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{d as comp,m as data};

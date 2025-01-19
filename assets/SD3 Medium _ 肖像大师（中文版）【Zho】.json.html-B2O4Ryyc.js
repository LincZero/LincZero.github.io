import{_ as e,c as t,b as o,o as s,r as i}from"./app-DdIoB8bt.js";const a={};function p(r,l){const n=i("VueFlow");return s(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(a,[["render",p],["__file","SD3 Medium _ 肖像大师（中文版）【Zho】.json.html.vue"]]),c=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20Medium%20_%20%E8%82%96%E5%83%8F%E5%A4%A7%E5%B8%88%EF%BC%88%E4%B8%AD%E6%96%87%E7%89%88%EF%BC%89%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 66, \\"last_link_id\\": 118, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": [ 540, -60 ], \\"size\\": { \\"0\\": 320, \\"1\\": 110 }, \\"flags\\": {}, \\"order\\": 0, ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20Medium%20_%20%E8%82%96%E5%83%8F%E5%A4%A7%E5%B8%88%EF%BC%88%E4%B8%AD%E6%96%87%E7%89%88%EF%BC%89%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 66, \\"last_link_id\\": 118, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": [ 540, -60 ], \\"size\\": { \\"0\\": 320, \\"1\\": 110 }, \\"flags\\": {}, \\"order\\": 0, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.2,"words":661},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + 肖像大师（中文版）【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 66,\\n\\"last_link_id\\": 118,\\n\\"nodes\\": [\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n540,\\n-60\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n99\\n],\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [],\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n53\\n],\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"sd3_medium.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 54,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1300,\\n-230\\n],\\n\\"size\\": [\\n690,\\n1130\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 101\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 66,\\n\\"type\\": \\"PortraitMaster_中文版\\",\\n\\"pos\\": [\\n880,\\n-230\\n],\\n\\"size\\": [\\n400,\\n1133.999984741211\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n117\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n118\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PortraitMaster_中文版\\"\\n},\\n\\"widgets_values\\": [\\n\\"肩部以上肖像\\",\\n1.5,\\n\\"女性\\",\\n21,\\n\\"法国人\\",\\n\\"-\\",\\n0.5,\\n\\"正常\\",\\n0.88,\\n\\"-\\",\\n\\"灰色\\",\\n\\"开心\\",\\n1.6,\\n\\"椭圆形\\",\\n0.77,\\n0.2,\\n\\"柠檬辫\\",\\n\\"黑色\\",\\n0.67,\\n\\"-\\",\\n0.53,\\n0.35000000000000003,\\n0.44,\\n0,\\n0,\\n0,\\n0,\\n0,\\n0.2,\\n1.17,\\n1.17,\\n1.2,\\n1.16,\\n\\"摄影棚灯光\\",\\n\\"从左侧\\",\\n1.1500000000000001,\\n\\"disable\\",\\n\\"raw photo, (realistic:1.5), (white dress:1.1)\\",\\n\\"(white background:1.5)\\",\\n\\"\\",\\n\\"\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n540,\\n850\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 50\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 53,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n101\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n540,\\n510\\n],\\n\\"size\\": [\\n320,\\n290\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 99,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 21\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 80\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 100\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n352524171987734,\\n\\"randomize\\",\\n30,\\n5.45,\\n\\"euler\\",\\n\\"sgm_uniform\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 53,\\n\\"type\\": \\"EmptySD3LatentImage\\",\\n\\"pos\\": [\\n540,\\n350\\n],\\n\\"size\\": [\\n320,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n100\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"\\n},\\n\\"widgets_values\\": [\\n960,\\n1536,\\n1\\n]\\n},\\n{\\n\\"id\\": 40,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n540,\\n220\\n],\\n\\"size\\": [\\n320,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 97\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 118,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n}\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n80\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Negative Prompt\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\"\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n540,\\n100\\n],\\n\\"size\\": [\\n320,\\n70\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 96\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 117,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n21\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Positive Prompt\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"highly realistic vintage book cover with a textured black background. At the top, the title 'COMFYPARK' is styled in a sharp, classic stylized font. Near the bottom, the author name 'ZHO' appears in a smaller, elegant serif font. The cover should look exceptionally real with enhanced crispness in the text, showing clear signs of wear such as slightly frayed edges and subtle distress marks. The overall appearance should mimic a well-preserved, old academic book, with a focus on high fidelity in the material texture and color depth.\\"\\n]\\n},\\n{\\n\\"id\\": 43,\\n\\"type\\": \\"TripleCLIPLoader\\",\\n\\"pos\\": [\\n540,\\n-230\\n],\\n\\"size\\": [\\n320,\\n120\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n96,\\n97\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"TripleCLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"clip_l.safetensors\\",\\n\\"clip_g.safetensors\\",\\n\\"t5xxl_fp16.safetensors\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n21,\\n16,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n53,\\n4,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n80,\\n40,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n96,\\n43,\\n0,\\n16,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n97,\\n43,\\n0,\\n40,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n99,\\n4,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n100,\\n53,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n101,\\n8,\\n0,\\n54,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n117,\\n66,\\n0,\\n16,\\n1,\\n\\"STRING\\"\\n],\\n[\\n118,\\n66,\\n1,\\n40,\\n1,\\n\\"STRING\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 1,\\n\\"offset\\": [\\n-222.98930611416245,\\n406.91532321620105\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + 肖像大师（中文版）【Zho】.json","value":{"title":"SD3 Medium + 肖像大师（中文版）【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + 肖像大师（中文版）【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{m as comp,c as data};

import{_ as r,e,h as b,r as t,o}from"./app-ioe5VjJ5.js";const s={};function i(a,p){const n=t("VueFlow");return o(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 64,
  "last_link_id": 114,
  "nodes": [
    {
      "id": 42,
      "type": "DualCLIPLoader",
      "pos": [
        100,
        360
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
          "name": "CLIP",
          "type": "CLIP",
          "links": [],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DualCLIPLoader"
      },
      "widgets_values": [
        "clip_g.safetensors",
        "clip_l.safetensors",
        "sd3"
      ]
    },
    {
      "id": 41,
      "type": "CLIPLoader",
      "pos": [
        100,
        230
      ],
      "size": {
        "0": 320,
        "1": 82
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPLoader"
      },
      "widgets_values": [
        "t5xxl_fp16.safetensors",
        "sd3"
      ]
    },
    {
      "id": 43,
      "type": "TripleCLIPLoader",
      "pos": [
        100,
        520
      ],
      "size": {
        "0": 320,
        "1": 110
      },
      "flags": {},
      "order": 2,
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
    },
    {
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": [
        100,
        680
      ],
      "size": {
        "0": 320,
        "1": 110
      },
      "flags": {},
      "order": 3,
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
      "id": 62,
      "type": "Qwen2_ModelLoader_Zho",
      "pos": [
        100,
        840
      ],
      "size": [
        320,
        80
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "Qwen2",
          "type": "QWEN2",
          "links": [
            111
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "tokenizer",
          "type": "TK",
          "links": [
            112
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "Qwen2_ModelLoader_Zho"
      },
      "widgets_values": [
        "Qwen/Qwen2-7B-Instruct"
      ]
    },
    {
      "id": 16,
      "type": "CLIPTextEncode",
      "pos": [
        440,
        230
      ],
      "size": [
        360,
        50
      ],
      "flags": {},
      "order": 9,
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
          "link": 114,
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
        "A serene mountain landscape at sunrise, with the sun casting a golden glow over the snow-capped peaks. The sky is a gradient of warm colors, transitioning from deep orange to soft pink and pale blue. A clear river runs through the valley, reflecting the vibrant colors of the sky. Tall pine trees line the riverbanks, and wildflowers add bursts of color to the scene. In the distance, a small cabin with smoke rising from its chimney adds a touch of rustic charm. The overall atmosphere is peaceful and breathtaking."
      ]
    },
    {
      "id": 40,
      "type": "CLIPTextEncode",
      "pos": [
        440,
        330
      ],
      "size": [
        360,
        80
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 97
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
      "id": 53,
      "type": "EmptySD3LatentImage",
      "pos": [
        440,
        460
      ],
      "size": {
        "0": 360,
        "1": 110
      },
      "flags": {},
      "order": 5,
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
        1024,
        1024,
        1
      ]
    },
    {
      "id": 64,
      "type": "DisplayText_Zho",
      "pos": [
        820,
        640
      ],
      "size": [
        320,
        280
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "text",
          "type": "STRING",
          "link": 113,
          "widget": {
            "name": "text"
          }
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            114
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DisplayText_Zho"
      },
      "widgets_values": [
        "",
        "\\"Exploring the infinite quest within: What is the essence, the purpose, the grand mystery that binds the cosmos and the tiniest particle in a question so profound it echoes through the universe - 'The Meaning of Life'.\\""
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        820,
        540
      ],
      "size": [
        320,
        50
      ],
      "flags": {},
      "order": 11,
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
        820,
        230
      ],
      "size": [
        320,
        260
      ],
      "flags": {},
      "order": 10,
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
        995676869624900,
        "fixed",
        30,
        5.45,
        "euler",
        "sgm_uniform",
        1
      ]
    },
    {
      "id": 54,
      "type": "PreviewImage",
      "pos": [
        1160,
        230
      ],
      "size": [
        660,
        690
      ],
      "flags": {},
      "order": 12,
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
      "id": 63,
      "type": "Qwen2_Zho",
      "pos": [
        440,
        620
      ],
      "size": [
        360,
        300
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "QWEN2",
          "link": 111
        },
        {
          "name": "tokenizer",
          "type": "TK",
          "link": 112
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            113
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Qwen2_Zho"
      },
      "widgets_values": [
        "What is the meaning of life?",
        "You are creating a prompt for Stable Diffusion to generate an image. First step: understand the input and generate a text prompt for the input. Second step: only respond in English with the prompt itself in phrase, but embellish it as needed but keep it under 200 tokens."
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
      111,
      62,
      0,
      63,
      0,
      "QWEN2"
    ],
    [
      112,
      62,
      1,
      63,
      1,
      "TK"
    ],
    [
      113,
      63,
      0,
      64,
      0,
      "STRING"
    ],
    [
      114,
      64,
      0,
      16,
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
        38.604813655578084,
        92.901973852992
      ]
    }
  },
  "version": 0.4
}
`})])}const l=r(s,[["render",i],["__file","SD3 Medium _ Qwen2 【Zho】.json.html.vue"]]),m=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20Medium%20_%20Qwen2%20%E3%80%90Zho%E3%80%91.json.html","title":"SD3 Medium _ Qwen2 【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 64, \\"last_link_id\\": 114, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 100, 360 ], \\"size\\": { \\"0\\": 320, \\"1\\": 110 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\":...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20Medium%20_%20Qwen2%20%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 64, \\"last_link_id\\": 114, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 100, 360 ], \\"size\\": { \\"0\\": 320, \\"1\\": 110 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\":..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.85,"words":854},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + Qwen2 【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 64,<br>\\n\\"last_link_id\\": 114,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 42,<br>\\n\\"type\\": \\"DualCLIPLoader\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n360<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DualCLIPLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"clip_g.safetensors\\",<br>\\n\\"clip_l.safetensors\\",<br>\\n\\"sd3\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 41,<br>\\n\\"type\\": \\"CLIPLoader\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n230<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"t5xxl_fp16.safetensors\\",<br>\\n\\"sd3\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 43,<br>\\n\\"type\\": \\"TripleCLIPLoader\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n520<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n96,<br>\\n97<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"TripleCLIPLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"clip_l.safetensors\\",<br>\\n\\"clip_g.safetensors\\",<br>\\n\\"t5xxl_fp16.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n680<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n99<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n53<br>\\n],<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"sd3_medium.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 62,<br>\\n\\"type\\": \\"Qwen2_ModelLoader_Zho\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n840<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"Qwen2\\",<br>\\n\\"type\\": \\"QWEN2\\",<br>\\n\\"links\\": [<br>\\n111<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"tokenizer\\",<br>\\n\\"type\\": \\"TK\\",<br>\\n\\"links\\": [<br>\\n112<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Qwen2_ModelLoader_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"Qwen/Qwen2-7B-Instruct\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n230<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 96<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 114,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n21<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Positive Prompt\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"A serene mountain landscape at sunrise, with the sun casting a golden glow over the snow-capped peaks. The sky is a gradient of warm colors, transitioning from deep orange to soft pink and pale blue. A clear river runs through the valley, reflecting the vibrant colors of the sky. Tall pine trees line the riverbanks, and wildflowers add bursts of color to the scene. In the distance, a small cabin with smoke rising from its chimney adds a touch of rustic charm. The overall atmosphere is peaceful and breathtaking.\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 40,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n330<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 97<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n80<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Negative Prompt\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 53,<br>\\n\\"type\\": \\"EmptySD3LatentImage\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n460<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n100<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 64,<br>\\n\\"type\\": \\"DisplayText_Zho\\",<br>\\n\\"pos\\": [<br>\\n820,<br>\\n640<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n280<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 113,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n114<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DisplayText_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\",<br>\\n\\"\\"Exploring the infinite quest within: What is the essence, the purpose, the grand mystery that binds the cosmos and the tiniest particle in a question so profound it echoes through the universe - 'The Meaning of Life'.\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n820,<br>\\n540<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 7<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 53,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n101<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n820,<br>\\n230<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n260<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 99,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 21<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 80<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 100<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n995676869624900,<br>\\n\\"fixed\\",<br>\\n30,<br>\\n5.45,<br>\\n\\"euler\\",<br>\\n\\"sgm_uniform\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 54,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1160,<br>\\n230<br>\\n],<br>\\n\\"size\\": [<br>\\n660,<br>\\n690<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 101<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 63,<br>\\n\\"type\\": \\"Qwen2_Zho\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n620<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n300<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"QWEN2\\",<br>\\n\\"link\\": 111<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"tokenizer\\",<br>\\n\\"type\\": \\"TK\\",<br>\\n\\"link\\": 112<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n113<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Qwen2_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"What is the meaning of life?\\",<br>\\n\\"You are creating a prompt for Stable Diffusion to generate an image. First step: understand the input and generate a text prompt for the input. Second step: only respond in English with the prompt itself in phrase, but embellish it as needed but keep it under 200 tokens.\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n16,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n53,<br>\\n4,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n80,<br>\\n40,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n96,<br>\\n43,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n97,<br>\\n43,<br>\\n0,<br>\\n40,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n99,<br>\\n4,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n100,<br>\\n53,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n101,<br>\\n8,<br>\\n0,<br>\\n54,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n111,<br>\\n62,<br>\\n0,<br>\\n63,<br>\\n0,<br>\\n\\"QWEN2\\"<br>\\n],<br>\\n[<br>\\n112,<br>\\n62,<br>\\n1,<br>\\n63,<br>\\n1,<br>\\n\\"TK\\"<br>\\n],<br>\\n[<br>\\n113,<br>\\n63,<br>\\n0,<br>\\n64,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n114,<br>\\n64,<br>\\n0,<br>\\n16,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 1,<br>\\n\\"offset\\": [<br>\\n38.604813655578084,<br>\\n92.901973852992<br>\\n]<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + Qwen2 【Zho】.json","value":{"title":"SD3 Medium + Qwen2 【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + Qwen2 【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{l as comp,m as data};

import{_ as e,c as t,b as o,r as s,o as i}from"./app-AhwLXIj8.js";const a={};function p(r,d){const n=s("VueFlow");return i(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(a,[["render",p],["__file","SD3 Medium _ Qwen2 【Zho】.json.html.vue"]]),u=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20Medium%20_%20Qwen2%20%E3%80%90Zho%E3%80%91.json.html","title":"SD3 Medium _ Qwen2 【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 64, \\"last_link_id\\": 114, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 100, 360 ], \\"size\\": { \\"0\\": 320, \\"1\\": 110 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\":...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20Medium%20_%20Qwen2%20%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 64, \\"last_link_id\\": 114, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 100, 360 ], \\"size\\": { \\"0\\": 320, \\"1\\": 110 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\":..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":2.85,"words":854},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + Qwen2 【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 64,\\n\\"last_link_id\\": 114,\\n\\"nodes\\": [\\n{\\n\\"id\\": 42,\\n\\"type\\": \\"DualCLIPLoader\\",\\n\\"pos\\": [\\n100,\\n360\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DualCLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"clip_g.safetensors\\",\\n\\"clip_l.safetensors\\",\\n\\"sd3\\"\\n]\\n},\\n{\\n\\"id\\": 41,\\n\\"type\\": \\"CLIPLoader\\",\\n\\"pos\\": [\\n100,\\n230\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"t5xxl_fp16.safetensors\\",\\n\\"sd3\\"\\n]\\n},\\n{\\n\\"id\\": 43,\\n\\"type\\": \\"TripleCLIPLoader\\",\\n\\"pos\\": [\\n100,\\n520\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n96,\\n97\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"TripleCLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"clip_l.safetensors\\",\\n\\"clip_g.safetensors\\",\\n\\"t5xxl_fp16.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n100,\\n680\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n99\\n],\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [],\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n53\\n],\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"sd3_medium.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 62,\\n\\"type\\": \\"Qwen2_ModelLoader_Zho\\",\\n\\"pos\\": [\\n100,\\n840\\n],\\n\\"size\\": [\\n320,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"Qwen2\\",\\n\\"type\\": \\"QWEN2\\",\\n\\"links\\": [\\n111\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"tokenizer\\",\\n\\"type\\": \\"TK\\",\\n\\"links\\": [\\n112\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Qwen2_ModelLoader_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"Qwen/Qwen2-7B-Instruct\\"\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n440,\\n230\\n],\\n\\"size\\": [\\n360,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 96\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 114,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n}\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n21\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Positive Prompt\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"A serene mountain landscape at sunrise, with the sun casting a golden glow over the snow-capped peaks. The sky is a gradient of warm colors, transitioning from deep orange to soft pink and pale blue. A clear river runs through the valley, reflecting the vibrant colors of the sky. Tall pine trees line the riverbanks, and wildflowers add bursts of color to the scene. In the distance, a small cabin with smoke rising from its chimney adds a touch of rustic charm. The overall atmosphere is peaceful and breathtaking.\\"\\n]\\n},\\n{\\n\\"id\\": 40,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n440,\\n330\\n],\\n\\"size\\": [\\n360,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 97\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n80\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Negative Prompt\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\"\\n]\\n},\\n{\\n\\"id\\": 53,\\n\\"type\\": \\"EmptySD3LatentImage\\",\\n\\"pos\\": [\\n440,\\n460\\n],\\n\\"size\\": {\\n\\"0\\": 360,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n100\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1024,\\n1\\n]\\n},\\n{\\n\\"id\\": 64,\\n\\"type\\": \\"DisplayText_Zho\\",\\n\\"pos\\": [\\n820,\\n640\\n],\\n\\"size\\": [\\n320,\\n280\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 113,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n}\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n114\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DisplayText_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\",\\n\\"\\"Exploring the infinite quest within: What is the essence, the purpose, the grand mystery that binds the cosmos and the tiniest particle in a question so profound it echoes through the universe - 'The Meaning of Life'.\\"\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n820,\\n540\\n],\\n\\"size\\": [\\n320,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 53,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n101\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n820,\\n230\\n],\\n\\"size\\": [\\n320,\\n260\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 99,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 21\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 80\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 100\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n995676869624900,\\n\\"fixed\\",\\n30,\\n5.45,\\n\\"euler\\",\\n\\"sgm_uniform\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 54,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1160,\\n230\\n],\\n\\"size\\": [\\n660,\\n690\\n],\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 101\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 63,\\n\\"type\\": \\"Qwen2_Zho\\",\\n\\"pos\\": [\\n440,\\n620\\n],\\n\\"size\\": [\\n360,\\n300\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"QWEN2\\",\\n\\"link\\": 111\\n},\\n{\\n\\"name\\": \\"tokenizer\\",\\n\\"type\\": \\"TK\\",\\n\\"link\\": 112\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n113\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Qwen2_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"What is the meaning of life?\\",\\n\\"You are creating a prompt for Stable Diffusion to generate an image. First step: understand the input and generate a text prompt for the input. Second step: only respond in English with the prompt itself in phrase, but embellish it as needed but keep it under 200 tokens.\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n21,\\n16,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n53,\\n4,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n80,\\n40,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n96,\\n43,\\n0,\\n16,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n97,\\n43,\\n0,\\n40,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n99,\\n4,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n100,\\n53,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n101,\\n8,\\n0,\\n54,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n111,\\n62,\\n0,\\n63,\\n0,\\n\\"QWEN2\\"\\n],\\n[\\n112,\\n62,\\n1,\\n63,\\n1,\\n\\"TK\\"\\n],\\n[\\n113,\\n63,\\n0,\\n64,\\n0,\\n\\"STRING\\"\\n],\\n[\\n114,\\n64,\\n0,\\n16,\\n1,\\n\\"STRING\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 1,\\n\\"offset\\": [\\n38.604813655578084,\\n92.901973852992\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + Qwen2 【Zho】.json","value":{"title":"SD3 Medium + Qwen2 【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 Medium + Qwen2 【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{m as comp,u as data};

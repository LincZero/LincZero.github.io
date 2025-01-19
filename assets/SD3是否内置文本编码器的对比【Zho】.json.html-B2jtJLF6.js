import{_ as e,c as t,b as o,o as s,r as i}from"./app-C-bjNnVy.js";const a={};function p(r,l){const n=i("VueFlow");return s(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 61,
  "last_link_id": 110,
  "nodes": [
    {
      "id": 42,
      "type": "DualCLIPLoader",
      "pos": [
        100,
        360
      ],
      "size": [
        320,
        110
      ],
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
      "size": [
        320,
        80
      ],
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
      "size": [
        320,
        110
      ],
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
      "id": 40,
      "type": "CLIPTextEncode",
      "pos": [
        440,
        480
      ],
      "size": [
        360,
        150
      ],
      "flags": {},
      "order": 8,
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
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        820,
        540
      ],
      "size": [
        310,
        50
      ],
      "flags": {},
      "order": 13,
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
      "id": 16,
      "type": "CLIPTextEncode",
      "pos": [
        440,
        230
      ],
      "size": [
        360,
        200
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 96
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
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 53,
      "type": "EmptySD3LatentImage",
      "pos": [
        440,
        680
      ],
      "size": [
        360,
        110
      ],
      "flags": {},
      "order": 3,
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
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": [
        100,
        680
      ],
      "size": [
        320,
        110
      ],
      "flags": {},
      "order": 4,
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
      "id": 57,
      "type": "VAEDecode",
      "pos": [
        820,
        1200
      ],
      "size": {
        "0": 310,
        "1": 50
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 106
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 107,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            108
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 58,
      "type": "CLIPTextEncode",
      "pos": [
        440,
        890
      ],
      "size": {
        "0": 360,
        "1": 200
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 109
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            103
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
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 59,
      "type": "CLIPTextEncode",
      "pos": [
        440,
        1140
      ],
      "size": {
        "0": 360,
        "1": 150
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 110
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            104
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
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 54,
      "type": "PreviewImage",
      "pos": [
        1160,
        230
      ],
      "size": [
        530,
        560
      ],
      "flags": {},
      "order": 15,
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
      "id": 3,
      "type": "KSampler",
      "pos": [
        820,
        230
      ],
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 11,
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
      "id": 55,
      "type": "KSampler",
      "pos": [
        820,
        890
      ],
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 102,
          "slot_index": 0
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 103
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 104
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 105
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            106
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
      "id": 60,
      "type": "EmptySD3LatentImage",
      "pos": [
        440,
        1340
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
            105
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
      "id": 61,
      "type": "PreviewImage",
      "pos": [
        1160,
        890
      ],
      "size": {
        "0": 530,
        "1": 560
      },
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 108
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 56,
      "type": "CheckpointLoaderSimple",
      "pos": [
        100,
        890
      ],
      "size": [
        320,
        100
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            102
          ],
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            109,
            110
          ],
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            107
          ],
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "sd3_medium_incl_clips.safetensors"
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
      102,
      56,
      0,
      55,
      0,
      "MODEL"
    ],
    [
      103,
      58,
      0,
      55,
      1,
      "CONDITIONING"
    ],
    [
      104,
      59,
      0,
      55,
      2,
      "CONDITIONING"
    ],
    [
      105,
      60,
      0,
      55,
      3,
      "LATENT"
    ],
    [
      106,
      55,
      0,
      57,
      0,
      "LATENT"
    ],
    [
      107,
      56,
      2,
      57,
      1,
      "VAE"
    ],
    [
      108,
      57,
      0,
      61,
      0,
      "IMAGE"
    ],
    [
      109,
      56,
      1,
      58,
      0,
      "CLIP"
    ],
    [
      110,
      56,
      1,
      59,
      0,
      "CLIP"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.7513148009015779,
      "offset": [
        383.8855213043528,
        89.27011310564524
      ]
    }
  },
  "version": 0.4
}
`})])}const m=e(a,[["render",p],["__file","SD3是否内置文本编码器的对比【Zho】.json.html.vue"]]),I=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%E6%98%AF%E5%90%A6%E5%86%85%E7%BD%AE%E6%96%87%E6%9C%AC%E7%BC%96%E7%A0%81%E5%99%A8%E7%9A%84%E5%AF%B9%E6%AF%94%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 61, \\"last_link_id\\": 110, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 100, 360 ], \\"size\\": [ 320, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outpu...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/undefined/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%E6%98%AF%E5%90%A6%E5%86%85%E7%BD%AE%E6%96%87%E6%9C%AC%E7%BC%96%E7%A0%81%E5%99%A8%E7%9A%84%E5%AF%B9%E6%AF%94%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 61, \\"last_link_id\\": 110, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 100, 360 ], \\"size\\": [ 320, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outpu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.57,"words":1070},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3是否内置文本编码器的对比【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 61,\\n\\"last_link_id\\": 110,\\n\\"nodes\\": [\\n{\\n\\"id\\": 42,\\n\\"type\\": \\"DualCLIPLoader\\",\\n\\"pos\\": [\\n100,\\n360\\n],\\n\\"size\\": [\\n320,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DualCLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"clip_g.safetensors\\",\\n\\"clip_l.safetensors\\",\\n\\"sd3\\"\\n]\\n},\\n{\\n\\"id\\": 41,\\n\\"type\\": \\"CLIPLoader\\",\\n\\"pos\\": [\\n100,\\n230\\n],\\n\\"size\\": [\\n320,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"t5xxl_fp16.safetensors\\",\\n\\"sd3\\"\\n]\\n},\\n{\\n\\"id\\": 43,\\n\\"type\\": \\"TripleCLIPLoader\\",\\n\\"pos\\": [\\n100,\\n520\\n],\\n\\"size\\": [\\n320,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n96,\\n97\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"TripleCLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"clip_l.safetensors\\",\\n\\"clip_g.safetensors\\",\\n\\"t5xxl_fp16.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 40,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n440,\\n480\\n],\\n\\"size\\": [\\n360,\\n150\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 97\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n80\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Negative Prompt\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n820,\\n540\\n],\\n\\"size\\": [\\n310,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 53,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n101\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n440,\\n230\\n],\\n\\"size\\": [\\n360,\\n200\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 96\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n21\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Positive Prompt\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"A serene mountain landscape at sunrise, with the sun casting a golden glow over the snow-capped peaks. The sky is a gradient of warm colors, transitioning from deep orange to soft pink and pale blue. A clear river runs through the valley, reflecting the vibrant colors of the sky. Tall pine trees line the riverbanks, and wildflowers add bursts of color to the scene. In the distance, a small cabin with smoke rising from its chimney adds a touch of rustic charm. The overall atmosphere is peaceful and breathtaking.\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 53,\\n\\"type\\": \\"EmptySD3LatentImage\\",\\n\\"pos\\": [\\n440,\\n680\\n],\\n\\"size\\": [\\n360,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n100\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1024,\\n1\\n]\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n100,\\n680\\n],\\n\\"size\\": [\\n320,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n99\\n],\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [],\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n53\\n],\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"sd3_medium.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 57,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n820,\\n1200\\n],\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 50\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 106\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 107,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n108\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 58,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n440,\\n890\\n],\\n\\"size\\": {\\n\\"0\\": 360,\\n\\"1\\": 200\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 109\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n103\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Positive Prompt\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"A serene mountain landscape at sunrise, with the sun casting a golden glow over the snow-capped peaks. The sky is a gradient of warm colors, transitioning from deep orange to soft pink and pale blue. A clear river runs through the valley, reflecting the vibrant colors of the sky. Tall pine trees line the riverbanks, and wildflowers add bursts of color to the scene. In the distance, a small cabin with smoke rising from its chimney adds a touch of rustic charm. The overall atmosphere is peaceful and breathtaking.\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 59,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n440,\\n1140\\n],\\n\\"size\\": {\\n\\"0\\": 360,\\n\\"1\\": 150\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 110\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n104\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Negative Prompt\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 54,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1160,\\n230\\n],\\n\\"size\\": [\\n530,\\n560\\n],\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 101\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n820,\\n230\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 99,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 21\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 80\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 100\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n995676869624900,\\n\\"fixed\\",\\n30,\\n5.45,\\n\\"euler\\",\\n\\"sgm_uniform\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 55,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n820,\\n890\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 102,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 103\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 104\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 105\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n106\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n995676869624900,\\n\\"fixed\\",\\n30,\\n5.45,\\n\\"euler\\",\\n\\"sgm_uniform\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 60,\\n\\"type\\": \\"EmptySD3LatentImage\\",\\n\\"pos\\": [\\n440,\\n1340\\n],\\n\\"size\\": {\\n\\"0\\": 360,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n105\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1024,\\n1\\n]\\n},\\n{\\n\\"id\\": 61,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1160,\\n890\\n],\\n\\"size\\": {\\n\\"0\\": 530,\\n\\"1\\": 560\\n},\\n\\"flags\\": {},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 108\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 56,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n100,\\n890\\n],\\n\\"size\\": [\\n320,\\n100\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n102\\n],\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n109,\\n110\\n],\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n107\\n],\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"sd3_medium_incl_clips.safetensors\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n21,\\n16,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n53,\\n4,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n80,\\n40,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n96,\\n43,\\n0,\\n16,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n97,\\n43,\\n0,\\n40,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n99,\\n4,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n100,\\n53,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n101,\\n8,\\n0,\\n54,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n102,\\n56,\\n0,\\n55,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n103,\\n58,\\n0,\\n55,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n104,\\n59,\\n0,\\n55,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n105,\\n60,\\n0,\\n55,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n106,\\n55,\\n0,\\n57,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n107,\\n56,\\n2,\\n57,\\n1,\\n\\"VAE\\"\\n],\\n[\\n108,\\n57,\\n0,\\n61,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n109,\\n56,\\n1,\\n58,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n110,\\n56,\\n1,\\n59,\\n0,\\n\\"CLIP\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.7513148009015779,\\n\\"offset\\": [\\n383.8855213043528,\\n89.27011310564524\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3是否内置文本编码器的对比【Zho】.json","value":{"title":"SD3是否内置文本编码器的对比【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3是否内置文本编码器的对比【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,I as data};

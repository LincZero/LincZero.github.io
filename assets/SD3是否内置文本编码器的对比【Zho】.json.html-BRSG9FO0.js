import{_ as r,e,h as b,r as t,o}from"./app-BMDPl2h4.js";const s={};function i(a,p){const n=t("VueFlow");return o(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const d=r(s,[["render",i],["__file","SD3是否内置文本编码器的对比【Zho】.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%E6%98%AF%E5%90%A6%E5%86%85%E7%BD%AE%E6%96%87%E6%9C%AC%E7%BC%96%E7%A0%81%E5%99%A8%E7%9A%84%E5%AF%B9%E6%AF%94%E3%80%90Zho%E3%80%91.json.html","title":"SD3是否内置文本编码器的对比【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 61, \\"last_link_id\\": 110, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 100, 360 ], \\"size\\": [ 320, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outpu...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%E6%98%AF%E5%90%A6%E5%86%85%E7%BD%AE%E6%96%87%E6%9C%AC%E7%BC%96%E7%A0%81%E5%99%A8%E7%9A%84%E5%AF%B9%E6%AF%94%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 61, \\"last_link_id\\": 110, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 100, 360 ], \\"size\\": [ 320, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outpu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":3.57,"words":1070},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3是否内置文本编码器的对比【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 61,<br>\\n\\"last_link_id\\": 110,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 42,<br>\\n\\"type\\": \\"DualCLIPLoader\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n360<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DualCLIPLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"clip_g.safetensors\\",<br>\\n\\"clip_l.safetensors\\",<br>\\n\\"sd3\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 41,<br>\\n\\"type\\": \\"CLIPLoader\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n230<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"t5xxl_fp16.safetensors\\",<br>\\n\\"sd3\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 43,<br>\\n\\"type\\": \\"TripleCLIPLoader\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n520<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n96,<br>\\n97<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"TripleCLIPLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"clip_l.safetensors\\",<br>\\n\\"clip_g.safetensors\\",<br>\\n\\"t5xxl_fp16.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 40,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n480<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n150<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 97<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n80<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Negative Prompt\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n820,<br>\\n540<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 7<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 53,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n101<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n230<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n200<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 96<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n21<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Positive Prompt\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"A serene mountain landscape at sunrise, with the sun casting a golden glow over the snow-capped peaks. The sky is a gradient of warm colors, transitioning from deep orange to soft pink and pale blue. A clear river runs through the valley, reflecting the vibrant colors of the sky. Tall pine trees line the riverbanks, and wildflowers add bursts of color to the scene. In the distance, a small cabin with smoke rising from its chimney adds a touch of rustic charm. The overall atmosphere is peaceful and breathtaking.\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 53,<br>\\n\\"type\\": \\"EmptySD3LatentImage\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n680<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n100<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n680<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n99<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n53<br>\\n],<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"sd3_medium.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 57,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n820,<br>\\n1200<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 50<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 106<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 107,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n108<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 58,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n890<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 200<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 109<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n103<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Positive Prompt\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"A serene mountain landscape at sunrise, with the sun casting a golden glow over the snow-capped peaks. The sky is a gradient of warm colors, transitioning from deep orange to soft pink and pale blue. A clear river runs through the valley, reflecting the vibrant colors of the sky. Tall pine trees line the riverbanks, and wildflowers add bursts of color to the scene. In the distance, a small cabin with smoke rising from its chimney adds a touch of rustic charm. The overall atmosphere is peaceful and breathtaking.\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 59,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n1140<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 150<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 110<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n104<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Negative Prompt\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 54,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1160,<br>\\n230<br>\\n],<br>\\n\\"size\\": [<br>\\n530,<br>\\n560<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 101<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n820,<br>\\n230<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 262<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 99,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 21<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 80<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 100<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n995676869624900,<br>\\n\\"fixed\\",<br>\\n30,<br>\\n5.45,<br>\\n\\"euler\\",<br>\\n\\"sgm_uniform\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 55,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n820,<br>\\n890<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 262<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 102,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 103<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 104<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 105<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n106<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n995676869624900,<br>\\n\\"fixed\\",<br>\\n30,<br>\\n5.45,<br>\\n\\"euler\\",<br>\\n\\"sgm_uniform\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 60,<br>\\n\\"type\\": \\"EmptySD3LatentImage\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n1340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n105<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 61,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1160,<br>\\n890<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 530,<br>\\n\\"1\\": 560<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 108<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 56,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n890<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n100<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n102<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n109,<br>\\n110<br>\\n],<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n107<br>\\n],<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"sd3_medium_incl_clips.safetensors\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n16,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n53,<br>\\n4,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n80,<br>\\n40,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n96,<br>\\n43,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n97,<br>\\n43,<br>\\n0,<br>\\n40,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n99,<br>\\n4,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n100,<br>\\n53,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n101,<br>\\n8,<br>\\n0,<br>\\n54,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n102,<br>\\n56,<br>\\n0,<br>\\n55,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n103,<br>\\n58,<br>\\n0,<br>\\n55,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n104,<br>\\n59,<br>\\n0,<br>\\n55,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n105,<br>\\n60,<br>\\n0,<br>\\n55,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n106,<br>\\n55,<br>\\n0,<br>\\n57,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n107,<br>\\n56,<br>\\n2,<br>\\n57,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n108,<br>\\n57,<br>\\n0,<br>\\n61,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n109,<br>\\n56,<br>\\n1,<br>\\n58,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n110,<br>\\n56,<br>\\n1,<br>\\n59,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 0.7513148009015779,<br>\\n\\"offset\\": [<br>\\n383.8855213043528,<br>\\n89.27011310564524<br>\\n]<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3是否内置文本编码器的对比【Zho】.json","value":{"title":"SD3是否内置文本编码器的对比【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3是否内置文本编码器的对比【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

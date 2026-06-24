import{_ as t,c as o,b as r,r as u,o as q}from"./app-k1oQHSab.js";const e={};function b(s,i){const n=u("VueFlow");return q(),o("div",null,[r(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const p=t(e,[["render",b]]),l=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%E6%98%AF%E5%90%A6%E5%86%85%E7%BD%AE%E6%96%87%E6%9C%AC%E7%BC%96%E7%A0%81%E5%99%A8%E7%9A%84%E5%AF%B9%E6%AF%94%E3%80%90Zho%E3%80%91.json.html","title":"SD3是否内置文本编码器的对比【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 61, &quot;last_link_id&quot;: 110, &quot;nodes&quot;: [ { &quot;id&quot;: 42, &quot;type&quot;: &quot;DualCLIPLoader&quot;, &quot;pos&quot;: [ 100, 3...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%E6%98%AF%E5%90%A6%E5%86%85%E7%BD%AE%E6%96%87%E6%9C%AC%E7%BC%96%E7%A0%81%E5%99%A8%E7%9A%84%E5%AF%B9%E6%AF%94%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 61, &quot;last_link_id&quot;: 110, &quot;nodes&quot;: [ { &quot;id&quot;: 42, &quot;type&quot;: &quot;DualCLIPLoader&quot;, &quot;pos&quot;: [ 100, 3..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":3.57,"words":1070},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3是否内置文本编码器的对比【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 61,<br>\\n&quot;last_link_id&quot;: 110,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 42,<br>\\n&quot;type&quot;: &quot;DualCLIPLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n360<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;DualCLIPLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;clip_g.safetensors&quot;,<br>\\n&quot;clip_l.safetensors&quot;,<br>\\n&quot;sd3&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 41,<br>\\n&quot;type&quot;: &quot;CLIPLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n230<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n80<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;t5xxl_fp16.safetensors&quot;,<br>\\n&quot;sd3&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 43,<br>\\n&quot;type&quot;: &quot;TripleCLIPLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n520<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n96,<br>\\n97<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;TripleCLIPLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;clip_l.safetensors&quot;,<br>\\n&quot;clip_g.safetensors&quot;,<br>\\n&quot;t5xxl_fp16.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 40,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n440,<br>\\n480<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n150<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 97<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n80<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;Negative Prompt&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n820,<br>\\n540<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 7<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 53,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n101<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 16,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n440,<br>\\n230<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n200<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 96<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n21<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;Positive Prompt&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;A serene mountain landscape at sunrise, with the sun casting a golden glow over the snow-capped peaks. The sky is a gradient of warm colors, transitioning from deep orange to soft pink and pale blue. A clear river runs through the valley, reflecting the vibrant colors of the sky. Tall pine trees line the riverbanks, and wildflowers add bursts of color to the scene. In the distance, a small cabin with smoke rising from its chimney adds a touch of rustic charm. The overall atmosphere is peaceful and breathtaking.&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 53,<br>\\n&quot;type&quot;: &quot;EmptySD3LatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n440,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n100<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptySD3LatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 4,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n99<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n53<br>\\n],<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;sd3_medium.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 57,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n820,<br>\\n1200<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 310,<br>\\n&quot;1&quot;: 50<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 106<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 107,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n108<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 58,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n440,<br>\\n890<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 200<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 109<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n103<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;Positive Prompt&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;A serene mountain landscape at sunrise, with the sun casting a golden glow over the snow-capped peaks. The sky is a gradient of warm colors, transitioning from deep orange to soft pink and pale blue. A clear river runs through the valley, reflecting the vibrant colors of the sky. Tall pine trees line the riverbanks, and wildflowers add bursts of color to the scene. In the distance, a small cabin with smoke rising from its chimney adds a touch of rustic charm. The overall atmosphere is peaceful and breathtaking.&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 59,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n440,<br>\\n1140<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 150<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 110<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n104<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;Negative Prompt&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 54,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1160,<br>\\n230<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n530,<br>\\n560<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 101<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n820,<br>\\n230<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 262<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 99,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 21<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 80<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 100<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n995676869624900,<br>\\n&quot;fixed&quot;,<br>\\n30,<br>\\n5.45,<br>\\n&quot;euler&quot;,<br>\\n&quot;sgm_uniform&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 55,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n820,<br>\\n890<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 262<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 102,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 103<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 104<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 105<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n106<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n995676869624900,<br>\\n&quot;fixed&quot;,<br>\\n30,<br>\\n5.45,<br>\\n&quot;euler&quot;,<br>\\n&quot;sgm_uniform&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 60,<br>\\n&quot;type&quot;: &quot;EmptySD3LatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n440,<br>\\n1340<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 110<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n105<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptySD3LatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 61,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1160,<br>\\n890<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 530,<br>\\n&quot;1&quot;: 560<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 16,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 108<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 56,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n890<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n100<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n102<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n109,<br>\\n110<br>\\n],<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n107<br>\\n],<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;sd3_medium_incl_clips.safetensors&quot;<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n21,<br>\\n16,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n53,<br>\\n4,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n80,<br>\\n40,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n96,<br>\\n43,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n97,<br>\\n43,<br>\\n0,<br>\\n40,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n99,<br>\\n4,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n100,<br>\\n53,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n101,<br>\\n8,<br>\\n0,<br>\\n54,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n102,<br>\\n56,<br>\\n0,<br>\\n55,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n103,<br>\\n58,<br>\\n0,<br>\\n55,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n104,<br>\\n59,<br>\\n0,<br>\\n55,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n105,<br>\\n60,<br>\\n0,<br>\\n55,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n106,<br>\\n55,<br>\\n0,<br>\\n57,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n107,<br>\\n56,<br>\\n2,<br>\\n57,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n108,<br>\\n57,<br>\\n0,<br>\\n61,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n109,<br>\\n56,<br>\\n1,<br>\\n58,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n110,<br>\\n56,<br>\\n1,<br>\\n59,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 0.7513148009015779,<br>\\n&quot;offset&quot;: [<br>\\n383.8855213043528,<br>\\n89.27011310564524<br>\\n]<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3是否内置文本编码器的对比【Zho】.json","value":{"title":"SD3是否内置文本编码器的对比【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3是否内置文本编码器的对比【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,l as data};

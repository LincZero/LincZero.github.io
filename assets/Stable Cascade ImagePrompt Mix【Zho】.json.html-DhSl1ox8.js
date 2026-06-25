import{_ as t,c as o,b as u,r,o as q}from"./app-CQkeIggD.js";const b={};function e(i,s){const n=r("VueFlow");return q(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 56,
  "last_link_id": 137,
  "nodes": [
    {
      "id": 34,
      "type": "StableCascade_EmptyLatentImage",
      "pos": [
        -800,
        300
      ],
      "size": {
        "0": 360,
        "1": 150
      },
      "flags": {},
      "order": 0,
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
      "size": {
        "0": 360,
        "1": 120
      },
      "flags": {},
      "order": 1,
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
            121,
            132
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
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        -800,
        750
      ],
      "size": [
        360,
        150
      ],
      "flags": {},
      "order": 6,
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
        -800,
        500
      ],
      "size": [
        360,
        200
      ],
      "flags": {},
      "order": 5,
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
        -40,
        850
      ],
      "size": [
        380,
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
        -40,
        130
      ],
      "size": [
        380,
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
      "id": 53,
      "type": "LoadImage",
      "pos": [
        -800,
        950
      ],
      "size": [
        300,
        400
      ],
      "flags": {},
      "order": 3,
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
      "id": 52,
      "type": "PreviewImage",
      "pos": [
        -480,
        950
      ],
      "size": [
        820,
        850
      ],
      "flags": {},
      "order": 15,
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
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        -420,
        640
      ],
      "size": [
        360,
        260
      ],
      "flags": {},
      "order": 11,
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
          "link": 137
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
        496976179875836,
        "randomize",
        20,
        4,
        "euler_ancestral",
        "simple",
        1
      ]
    },
    {
      "id": 55,
      "type": "unCLIPConditioning",
      "pos": [
        -420,
        490
      ],
      "size": [
        360,
        100
      ],
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 136
        },
        {
          "name": "clip_vision_output",
          "type": "CLIP_VISION_OUTPUT",
          "link": 135
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            137
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
      "id": 54,
      "type": "CLIPVisionEncode",
      "pos": [
        -420,
        390
      ],
      "size": [
        360,
        50
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip_vision",
          "type": "CLIP_VISION",
          "link": 132
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 133,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "CLIP_VISION_OUTPUT",
          "type": "CLIP_VISION_OUTPUT",
          "links": [
            135
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
      "id": 51,
      "type": "unCLIPConditioning",
      "pos": [
        -420,
        230
      ],
      "size": [
        360,
        110
      ],
      "flags": {},
      "order": 9,
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
            136
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
        130
      ],
      "size": [
        360,
        50
      ],
      "flags": {},
      "order": 7,
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
      "id": 36,
      "type": "StableCascade_StageB_Conditioning",
      "pos": [
        -40,
        280
      ],
      "size": [
        380,
        60
      ],
      "flags": {},
      "order": 12,
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
      "id": 56,
      "type": "LoadImage",
      "pos": [
        -800,
        1400
      ],
      "size": [
        300,
        400
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            133
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
      "id": 33,
      "type": "KSampler",
      "pos": [
        -40,
        390
      ],
      "size": [
        380,
        410
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
        653638923925004,
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
    ],
    [
      132,
      49,
      3,
      54,
      0,
      "CLIP_VISION"
    ],
    [
      133,
      56,
      0,
      54,
      1,
      "IMAGE"
    ],
    [
      135,
      54,
      0,
      55,
      1,
      "CLIP_VISION_OUTPUT"
    ],
    [
      136,
      51,
      0,
      55,
      0,
      "CONDITIONING"
    ],
    [
      137,
      55,
      0,
      3,
      1,
      "CONDITIONING"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const p=t(b,[["render",e]]),I=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20ImagePrompt%20Mix%E3%80%90Zho%E3%80%91.json.html","title":"Stable Cascade ImagePrompt Mix【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 56, &quot;last_link_id&quot;: 137, &quot;nodes&quot;: [ { &quot;id&quot;: 34, &quot;type&quot;: &quot;StableCascade_EmptyLatentImage&quot;, &quot;pos...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20ImagePrompt%20Mix%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 56, &quot;last_link_id&quot;: 137, &quot;nodes&quot;: [ { &quot;id&quot;: 34, &quot;type&quot;: &quot;StableCascade_EmptyLatentImage&quot;, &quot;pos..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":3.16,"words":947},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Mix【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 56,<br>\\n&quot;last_link_id&quot;: 137,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 34,<br>\\n&quot;type&quot;: &quot;StableCascade_EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-800,<br>\\n300<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 150<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;stage_c&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n123<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;stage_b&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n83<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;StableCascade_EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1024,<br>\\n1024,<br>\\n42,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 49,<br>\\n&quot;type&quot;: &quot;unCLIPCheckpointLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-800,<br>\\n130<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 120<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n118<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n119,<br>\\n120<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;links&quot;: [<br>\\n121,<br>\\n132<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;unCLIPCheckpointLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;stable_cascade_stage_c.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-800,<br>\\n750<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n150<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 120<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n108,<br>\\n129<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;CLIP Text Encode (Negative Prompt)&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;text, watermark&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-800,<br>\\n500<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n200<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 119<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n125,<br>\\n128<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;CLIP Text Encode (Positive Prompt)&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;cute cat cartoon&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-40,<br>\\n850<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n380,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 98<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 114,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n130<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 42,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-40,<br>\\n130<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n380,<br>\\n100<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n113<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n114<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;stable_cascade_stage_b.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 53,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-800,<br>\\n950<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n300,<br>\\n400<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n131<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI_temp_pcyxc_00007_.png&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 52,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-480,<br>\\n950<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n820,<br>\\n850<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 130<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-420,<br>\\n640<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n260<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 118,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 137<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 108<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 123<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n88<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n496976179875836,<br>\\n&quot;randomize&quot;,<br>\\n20,<br>\\n4,<br>\\n&quot;euler_ancestral&quot;,<br>\\n&quot;simple&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 55,<br>\\n&quot;type&quot;: &quot;unCLIPConditioning&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-420,<br>\\n490<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n100<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 136<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip_vision_output&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION_OUTPUT&quot;,<br>\\n&quot;link&quot;: 135<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n137<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;unCLIPConditioning&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1,<br>\\n0<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 54,<br>\\n&quot;type&quot;: &quot;CLIPVisionEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-420,<br>\\n390<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip_vision&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;link&quot;: 132<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 133,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP_VISION_OUTPUT&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION_OUTPUT&quot;,<br>\\n&quot;links&quot;: [<br>\\n135<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPVisionEncode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 51,<br>\\n&quot;type&quot;: &quot;unCLIPConditioning&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-420,<br>\\n230<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 125<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip_vision_output&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION_OUTPUT&quot;,<br>\\n&quot;link&quot;: 124<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n136<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;unCLIPConditioning&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1,<br>\\n0<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 50,<br>\\n&quot;type&quot;: &quot;CLIPVisionEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-420,<br>\\n130<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip_vision&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;link&quot;: 121<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 131,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP_VISION_OUTPUT&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION_OUTPUT&quot;,<br>\\n&quot;links&quot;: [<br>\\n124<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPVisionEncode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 36,<br>\\n&quot;type&quot;: &quot;StableCascade_StageB_Conditioning&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-40,<br>\\n280<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n380,<br>\\n60<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 128<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;stage_c&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 88<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n86<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;StableCascade_StageB_Conditioning&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 56,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-800,<br>\\n1400<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n300,<br>\\n400<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n133<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI_temp_pcyxc_00007_.png&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 33,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-40,<br>\\n390<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n380,<br>\\n410<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 113,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 86<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 129<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 83<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n98<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n653638923925004,<br>\\n&quot;randomize&quot;,<br>\\n10,<br>\\n1.1,<br>\\n&quot;euler_ancestral&quot;,<br>\\n&quot;simple&quot;,<br>\\n1<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n83,<br>\\n34,<br>\\n1,<br>\\n33,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n86,<br>\\n36,<br>\\n0,<br>\\n33,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n88,<br>\\n3,<br>\\n0,<br>\\n36,<br>\\n1,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n98,<br>\\n33,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n108,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n113,<br>\\n42,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n114,<br>\\n42,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n118,<br>\\n49,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n119,<br>\\n49,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n120,<br>\\n49,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n121,<br>\\n49,<br>\\n3,<br>\\n50,<br>\\n0,<br>\\n&quot;CLIP_VISION&quot;<br>\\n],<br>\\n[<br>\\n123,<br>\\n34,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n124,<br>\\n50,<br>\\n0,<br>\\n51,<br>\\n1,<br>\\n&quot;CLIP_VISION_OUTPUT&quot;<br>\\n],<br>\\n[<br>\\n125,<br>\\n6,<br>\\n0,<br>\\n51,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n128,<br>\\n6,<br>\\n0,<br>\\n36,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n129,<br>\\n7,<br>\\n0,<br>\\n33,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n130,<br>\\n8,<br>\\n0,<br>\\n52,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n131,<br>\\n53,<br>\\n0,<br>\\n50,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n132,<br>\\n49,<br>\\n3,<br>\\n54,<br>\\n0,<br>\\n&quot;CLIP_VISION&quot;<br>\\n],<br>\\n[<br>\\n133,<br>\\n56,<br>\\n0,<br>\\n54,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n135,<br>\\n54,<br>\\n0,<br>\\n55,<br>\\n1,<br>\\n&quot;CLIP_VISION_OUTPUT&quot;<br>\\n],<br>\\n[<br>\\n136,<br>\\n51,<br>\\n0,<br>\\n55,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n137,<br>\\n55,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Mix【Zho】.json","value":{"title":"Stable Cascade ImagePrompt Mix【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade ImagePrompt Mix【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,I as data};

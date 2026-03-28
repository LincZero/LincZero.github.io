import{_ as o,c as t,b as r,r as u,o as q}from"./app-D8VOuKyT.js";const b={};function e(s,p){const n=u("VueFlow");return q(),t("div",null,[r(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 21,
  "last_link_id": 23,
  "nodes": [
    {
      "id": 18,
      "type": "ControlNetApply",
      "pos": [
        -50,
        530
      ],
      "size": {
        "0": 317.4000244140625,
        "1": 98
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 20,
          "slot_index": 0
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 19,
          "slot_index": 1
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 18,
          "slot_index": 2
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            21
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
      "id": 11,
      "type": "ModelSamplingContinuousEDM",
      "pos": [
        -50,
        370
      ],
      "size": [
        320,
        110
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 11
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            12
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ModelSamplingContinuousEDM"
      },
      "widgets_values": [
        "edm_playground_v2.5",
        120,
        0.002
      ]
    },
    {
      "id": 20,
      "type": "SaveTripoSR_Zho",
      "pos": [
        290,
        1120
      ],
      "size": [
        710,
        610
      ],
      "flags": {
        "collapsed": false
      },
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "mesh",
          "type": "MESH",
          "link": 22
        }
      ],
      "properties": {
        "Node name for S&R": "SaveTripoSR_Zho"
      },
      "widgets_values": [
        "TripoSR123",
        null
      ]
    },
    {
      "id": 10,
      "type": "PreviewImage",
      "pos": [
        660,
        370
      ],
      "size": [
        340,
        370
      ],
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 10
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 13,
      "type": "BRIA_RMBG_Zho",
      "pos": [
        290,
        550
      ],
      "size": [
        350,
        50
      ],
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "rmbgmodel",
          "type": "RMBGMODEL",
          "link": 13
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 14,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "links": [
            16,
            23
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "mask",
          "type": "MASK",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "BRIA_RMBG_Zho"
      }
    },
    {
      "id": 14,
      "type": "TripoSRModelLoader_Zho",
      "pos": [
        290,
        650
      ],
      "size": [
        350,
        90
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "TRIPOSR_MODEL",
          "type": "TRIPOSR_MODEL",
          "links": [
            15
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "TripoSRModelLoader_Zho"
      },
      "widgets_values": [
        "TPSRmodel.ckpt",
        8192
      ]
    },
    {
      "id": 12,
      "type": "BRIA_RMBG_ModelLoader_Zho",
      "pos": [
        290,
        470
      ],
      "size": [
        350,
        30
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "rmbgmodel",
          "type": "RMBGMODEL",
          "links": [
            13
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "BRIA_RMBG_ModelLoader_Zho"
      }
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        290,
        370
      ],
      "size": [
        350,
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
          "link": 8
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            10,
            14
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -380,
        370
      ],
      "size": [
        310,
        110
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            11
          ],
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            3,
            5
          ],
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            8
          ],
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "playground-v25.safetensors"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        -380,
        530
      ],
      "size": [
        310,
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
            2
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        1024,
        1024,
        1
      ]
    },
    {
      "id": 19,
      "type": "ControlNetLoader",
      "pos": [
        -380,
        690
      ],
      "size": [
        310,
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
            19
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "controlnet-canny-sdxl-1.0.safetensors"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        -380,
        810
      ],
      "size": [
        310,
        130
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 5
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "text, watermark"
      ]
    },
    {
      "id": 15,
      "type": "TripoSRSampler_Zho",
      "pos": [
        290,
        790
      ],
      "size": [
        350,
        150
      ],
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "tpsr_model",
          "type": "TRIPOSR_MODEL",
          "link": 15
        },
        {
          "name": "reference_image",
          "type": "IMAGE",
          "link": 16,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "MESH",
          "type": "MESH",
          "links": [
            22
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "TripoSRSampler_Zho"
      },
      "widgets_values": [
        false,
        0.85,
        256,
        25
      ]
    },
    {
      "id": 21,
      "type": "PreviewImage",
      "pos": [
        660,
        790
      ],
      "size": [
        340,
        280
      ],
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 23
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
        -50,
        680
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
          "link": 12
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 21
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 6
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 2
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
        602393205108157,
        "randomize",
        20,
        3,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        290,
        990
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
          "link": 3
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            20
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "robot toy"
      ]
    },
    {
      "id": 17,
      "type": "PainterNode",
      "pos": [
        -380,
        990
      ],
      "size": [
        650,
        740
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            18
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
        "Node name for S&R": "PainterNode"
      },
      "widgets_values": [
        "Paint_0.png",
        "clear_painer",
        null
      ]
    }
  ],
  "links": [
    [
      2,
      5,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      3,
      4,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      5,
      4,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      6,
      7,
      0,
      3,
      2,
      "CONDITIONING"
    ],
    [
      7,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      8,
      4,
      2,
      8,
      1,
      "VAE"
    ],
    [
      10,
      8,
      0,
      10,
      0,
      "IMAGE"
    ],
    [
      11,
      4,
      0,
      11,
      0,
      "MODEL"
    ],
    [
      12,
      11,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      13,
      12,
      0,
      13,
      0,
      "RMBGMODEL"
    ],
    [
      14,
      8,
      0,
      13,
      1,
      "IMAGE"
    ],
    [
      15,
      14,
      0,
      15,
      0,
      "TRIPOSR_MODEL"
    ],
    [
      16,
      13,
      0,
      15,
      1,
      "IMAGE"
    ],
    [
      18,
      17,
      0,
      18,
      2,
      "IMAGE"
    ],
    [
      19,
      19,
      0,
      18,
      1,
      "CONTROL_NET"
    ],
    [
      20,
      6,
      0,
      18,
      0,
      "CONDITIONING"
    ],
    [
      21,
      18,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      22,
      15,
      0,
      20,
      0,
      "MESH"
    ],
    [
      23,
      13,
      0,
      21,
      0,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const a=o(b,[["render",e]]),l=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Sketch%20to%203D%E3%80%90Zho%E3%80%91.json.html","title":"Sketch to 3D【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 21, &quot;last_link_id&quot;: 23, &quot;nodes&quot;: [ { &quot;id&quot;: 18, &quot;type&quot;: &quot;ControlNetApply&quot;, &quot;pos&quot;: [ -50, 5...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Sketch%20to%203D%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 21, &quot;last_link_id&quot;: 23, &quot;nodes&quot;: [ { &quot;id&quot;: 18, &quot;type&quot;: &quot;ControlNetApply&quot;, &quot;pos&quot;: [ -50, 5..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.86,"words":858},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Sketch to 3D【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 21,<br>\\n&quot;last_link_id&quot;: 23,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 18,<br>\\n&quot;type&quot;: &quot;ControlNetApply&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-50,<br>\\n530<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 317.4000244140625,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 20,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;control_net&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;link&quot;: 19,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 18,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n21<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetApply&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 11,<br>\\n&quot;type&quot;: &quot;ModelSamplingContinuousEDM&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-50,<br>\\n370<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 11<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n12<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ModelSamplingContinuousEDM&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;edm_playground_v2.5&quot;,<br>\\n120,<br>\\n0.002<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 20,<br>\\n&quot;type&quot;: &quot;SaveTripoSR_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n1120<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n710,<br>\\n610<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 16,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mesh&quot;,<br>\\n&quot;type&quot;: &quot;MESH&quot;,<br>\\n&quot;link&quot;: 22<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SaveTripoSR_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;TripoSR123&quot;,<br>\\nnull<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 10,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n660,<br>\\n370<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n340,<br>\\n370<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 10<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 13,<br>\\n&quot;type&quot;: &quot;BRIA_RMBG_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n550<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;rmbgmodel&quot;,<br>\\n&quot;type&quot;: &quot;RMBGMODEL&quot;,<br>\\n&quot;link&quot;: 13<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 14,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n16,<br>\\n23<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BRIA_RMBG_Zho&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 14,<br>\\n&quot;type&quot;: &quot;TripoSRModelLoader_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n650<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n90<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;TRIPOSR_MODEL&quot;,<br>\\n&quot;type&quot;: &quot;TRIPOSR_MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n15<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;TripoSRModelLoader_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;TPSRmodel.ckpt&quot;,<br>\\n8192<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;BRIA_RMBG_ModelLoader_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n470<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n30<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;rmbgmodel&quot;,<br>\\n&quot;type&quot;: &quot;RMBGMODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n13<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BRIA_RMBG_ModelLoader_Zho&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n370<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 7<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 8<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n10,<br>\\n14<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 4,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-380,<br>\\n370<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n11<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n3,<br>\\n5<br>\\n],<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n8<br>\\n],<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;playground-v25.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 5,<br>\\n&quot;type&quot;: &quot;EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-380,<br>\\n530<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n2<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 19,<br>\\n&quot;type&quot;: &quot;ControlNetLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-380,<br>\\n690<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n70<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;links&quot;: [<br>\\n19<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;controlnet-canny-sdxl-1.0.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-380,<br>\\n810<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n130<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 5<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n6<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;text, watermark&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 15,<br>\\n&quot;type&quot;: &quot;TripoSRSampler_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n790<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n150<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;tpsr_model&quot;,<br>\\n&quot;type&quot;: &quot;TRIPOSR_MODEL&quot;,<br>\\n&quot;link&quot;: 15<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;reference_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 16,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MESH&quot;,<br>\\n&quot;type&quot;: &quot;MESH&quot;,<br>\\n&quot;links&quot;: [<br>\\n22<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;TripoSRSampler_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\nfalse,<br>\\n0.85,<br>\\n256,<br>\\n25<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 21,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n660,<br>\\n790<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n340,<br>\\n280<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 23<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-50,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n260<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 12<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 21<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 6<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n602393205108157,<br>\\n&quot;randomize&quot;,<br>\\n20,<br>\\n3,<br>\\n&quot;dpmpp_2m&quot;,<br>\\n&quot;karras&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n990<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n80<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n20<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;robot toy&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 17,<br>\\n&quot;type&quot;: &quot;PainterNode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-380,<br>\\n990<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n650,<br>\\n740<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n18<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PainterNode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;Paint_0.png&quot;,<br>\\n&quot;clear_painer&quot;,<br>\\nnull<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n2,<br>\\n5,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n3,<br>\\n4,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n5,<br>\\n4,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n8,<br>\\n4,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n10,<br>\\n8,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n11,<br>\\n4,<br>\\n0,<br>\\n11,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n12,<br>\\n11,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n13,<br>\\n12,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n&quot;RMBGMODEL&quot;<br>\\n],<br>\\n[<br>\\n14,<br>\\n8,<br>\\n0,<br>\\n13,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n15,<br>\\n14,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n&quot;TRIPOSR_MODEL&quot;<br>\\n],<br>\\n[<br>\\n16,<br>\\n13,<br>\\n0,<br>\\n15,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n18,<br>\\n17,<br>\\n0,<br>\\n18,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n19,<br>\\n19,<br>\\n0,<br>\\n18,<br>\\n1,<br>\\n&quot;CONTROL_NET&quot;<br>\\n],<br>\\n[<br>\\n20,<br>\\n6,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n21,<br>\\n18,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n22,<br>\\n15,<br>\\n0,<br>\\n20,<br>\\n0,<br>\\n&quot;MESH&quot;<br>\\n],<br>\\n[<br>\\n23,<br>\\n13,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Sketch to 3D【Zho】.json","value":{"title":"Sketch to 3D【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Sketch to 3D【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{a as comp,l as data};

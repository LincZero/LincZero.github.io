import{_ as r,c as e,d as b,r as o,o as t}from"./app-DNK1T9lh.js";const s={};function p(i,a){const n=o("VueFlow");return t(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const d=r(s,[["render",p]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Sketch%20to%203D%E3%80%90Zho%E3%80%91.json.html","title":"Sketch to 3D【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 21, \\"last_link_id\\": 23, \\"nodes\\": [ { \\"id\\": 18, \\"type\\": \\"ControlNetApply\\", \\"pos\\": [ -50, 530 ], \\"size\\": { \\"0\\": 317.4000244140625, \\"1\\": 98 }, \\"flags\\": {}, \\"order...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Sketch%20to%203D%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 21, \\"last_link_id\\": 23, \\"nodes\\": [ { \\"id\\": 18, \\"type\\": \\"ControlNetApply\\", \\"pos\\": [ -50, 530 ], \\"size\\": { \\"0\\": 317.4000244140625, \\"1\\": 98 }, \\"flags\\": {}, \\"order..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.86,"words":858},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Sketch to 3D【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 21,<br>\\n\\"last_link_id\\": 23,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 18,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": [<br>\\n-50,<br>\\n530<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 317.4000244140625,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 20,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 19,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 18,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n21<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"ModelSamplingContinuousEDM\\",<br>\\n\\"pos\\": [<br>\\n-50,<br>\\n370<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 11<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n12<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ModelSamplingContinuousEDM\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"edm_playground_v2.5\\",<br>\\n120,<br>\\n0.002<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 20,<br>\\n\\"type\\": \\"SaveTripoSR_Zho\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n1120<br>\\n],<br>\\n\\"size\\": [<br>\\n710,<br>\\n610<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mesh\\",<br>\\n\\"type\\": \\"MESH\\",<br>\\n\\"link\\": 22<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveTripoSR_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"TripoSR123\\",<br>\\nnull<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 10,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n660,<br>\\n370<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n370<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 10<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"BRIA_RMBG_Zho\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n550<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"rmbgmodel\\",<br>\\n\\"type\\": \\"RMBGMODEL\\",<br>\\n\\"link\\": 13<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 14,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n16,<br>\\n23<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BRIA_RMBG_Zho\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"TripoSRModelLoader_Zho\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n650<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n90<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"TRIPOSR_MODEL\\",<br>\\n\\"type\\": \\"TRIPOSR_MODEL\\",<br>\\n\\"links\\": [<br>\\n15<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"TripoSRModelLoader_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"TPSRmodel.ckpt\\",<br>\\n8192<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"BRIA_RMBG_ModelLoader_Zho\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n470<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n30<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"rmbgmodel\\",<br>\\n\\"type\\": \\"RMBGMODEL\\",<br>\\n\\"links\\": [<br>\\n13<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BRIA_RMBG_ModelLoader_Zho\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n370<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 7<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 8<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n10,<br>\\n14<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-380,<br>\\n370<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n11<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n3,<br>\\n5<br>\\n],<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n8<br>\\n],<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"playground-v25.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n-380,<br>\\n530<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n2<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 19,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n-380,<br>\\n690<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n70<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n19<br>\\n],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"controlnet-canny-sdxl-1.0.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-380,<br>\\n810<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 5<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n6<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"text, watermark\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 15,<br>\\n\\"type\\": \\"TripoSRSampler_Zho\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n790<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n150<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"tpsr_model\\",<br>\\n\\"type\\": \\"TRIPOSR_MODEL\\",<br>\\n\\"link\\": 15<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"reference_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 16,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MESH\\",<br>\\n\\"type\\": \\"MESH\\",<br>\\n\\"links\\": [<br>\\n22<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"TripoSRSampler_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\nfalse,<br>\\n0.85,<br>\\n256,<br>\\n25<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 21,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n660,<br>\\n790<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n280<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 23<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-50,<br>\\n680<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n260<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 12<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 21<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 6<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 2<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n602393205108157,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n3,<br>\\n\\"dpmpp_2m\\",<br>\\n\\"karras\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n990<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n20<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"robot toy\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 17,<br>\\n\\"type\\": \\"PainterNode\\",<br>\\n\\"pos\\": [<br>\\n-380,<br>\\n990<br>\\n],<br>\\n\\"size\\": [<br>\\n650,<br>\\n740<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n18<br>\\n],<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PainterNode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"Paint_0.png\\",<br>\\n\\"clear_painer\\",<br>\\nnull<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n2,<br>\\n5,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n3,<br>\\n4,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n5,<br>\\n4,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n8,<br>\\n4,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n10,<br>\\n8,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n11,<br>\\n4,<br>\\n0,<br>\\n11,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n12,<br>\\n11,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n13,<br>\\n12,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n\\"RMBGMODEL\\"<br>\\n],<br>\\n[<br>\\n14,<br>\\n8,<br>\\n0,<br>\\n13,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n15,<br>\\n14,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n\\"TRIPOSR_MODEL\\"<br>\\n],<br>\\n[<br>\\n16,<br>\\n13,<br>\\n0,<br>\\n15,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n18,<br>\\n17,<br>\\n0,<br>\\n18,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n19,<br>\\n19,<br>\\n0,<br>\\n18,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n20,<br>\\n6,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n18,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n22,<br>\\n15,<br>\\n0,<br>\\n20,<br>\\n0,<br>\\n\\"MESH\\"<br>\\n],<br>\\n[<br>\\n23,<br>\\n13,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Sketch to 3D【Zho】.json","value":{"title":"Sketch to 3D【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Sketch to 3D【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

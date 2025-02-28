import{_ as e,c as o,b as t,o as s,r as p}from"./app-DQC9V0Al.js";const i={};function a(r,l){const n=p("VueFlow");return s(),o("div",null,[t(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(i,[["render",a],["__file","Sketch to 3D【Zho】.json.html.vue"]]),_=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Sketch%20to%203D%E3%80%90Zho%E3%80%91.json.html","title":"Sketch to 3D【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 21, \\"last_link_id\\": 23, \\"nodes\\": [ { \\"id\\": 18, \\"type\\": \\"ControlNetApply\\", \\"pos\\": [ -50, 530 ], \\"size\\": { \\"0\\": 317.4000244140625, \\"1\\": 98 }, \\"flags\\": {}, \\"order...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Sketch%20to%203D%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 21, \\"last_link_id\\": 23, \\"nodes\\": [ { \\"id\\": 18, \\"type\\": \\"ControlNetApply\\", \\"pos\\": [ -50, 530 ], \\"size\\": { \\"0\\": 317.4000244140625, \\"1\\": 98 }, \\"flags\\": {}, \\"order..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":2.86,"words":858},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Sketch to 3D【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 21,\\n\\"last_link_id\\": 23,\\n\\"nodes\\": [\\n{\\n\\"id\\": 18,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": [\\n-50,\\n530\\n],\\n\\"size\\": {\\n\\"0\\": 317.4000244140625,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 20,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 19,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 18,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n21\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n1\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"ModelSamplingContinuousEDM\\",\\n\\"pos\\": [\\n-50,\\n370\\n],\\n\\"size\\": [\\n320,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 11\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n12\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ModelSamplingContinuousEDM\\"\\n},\\n\\"widgets_values\\": [\\n\\"edm_playground_v2.5\\",\\n120,\\n0.002\\n]\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"SaveTripoSR_Zho\\",\\n\\"pos\\": [\\n290,\\n1120\\n],\\n\\"size\\": [\\n710,\\n610\\n],\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mesh\\",\\n\\"type\\": \\"MESH\\",\\n\\"link\\": 22\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveTripoSR_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"TripoSR123\\",\\nnull\\n]\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n660,\\n370\\n],\\n\\"size\\": [\\n340,\\n370\\n],\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 10\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"BRIA_RMBG_Zho\\",\\n\\"pos\\": [\\n290,\\n550\\n],\\n\\"size\\": [\\n350,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"rmbgmodel\\",\\n\\"type\\": \\"RMBGMODEL\\",\\n\\"link\\": 13\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 14,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n16,\\n23\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BRIA_RMBG_Zho\\"\\n}\\n},\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"TripoSRModelLoader_Zho\\",\\n\\"pos\\": [\\n290,\\n650\\n],\\n\\"size\\": [\\n350,\\n90\\n],\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"TRIPOSR_MODEL\\",\\n\\"type\\": \\"TRIPOSR_MODEL\\",\\n\\"links\\": [\\n15\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"TripoSRModelLoader_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"TPSRmodel.ckpt\\",\\n8192\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"BRIA_RMBG_ModelLoader_Zho\\",\\n\\"pos\\": [\\n290,\\n470\\n],\\n\\"size\\": [\\n350,\\n30\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"rmbgmodel\\",\\n\\"type\\": \\"RMBGMODEL\\",\\n\\"links\\": [\\n13\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BRIA_RMBG_ModelLoader_Zho\\"\\n}\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n290,\\n370\\n],\\n\\"size\\": [\\n350,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 8\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n10,\\n14\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-380,\\n370\\n],\\n\\"size\\": [\\n310,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n11\\n],\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n3,\\n5\\n],\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n8\\n],\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"playground-v25.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n-380,\\n530\\n],\\n\\"size\\": [\\n310,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1024,\\n1\\n]\\n},\\n{\\n\\"id\\": 19,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n-380,\\n690\\n],\\n\\"size\\": [\\n310,\\n70\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n19\\n],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"controlnet-canny-sdxl-1.0.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-380,\\n810\\n],\\n\\"size\\": [\\n310,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 5\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"text, watermark\\"\\n]\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"TripoSRSampler_Zho\\",\\n\\"pos\\": [\\n290,\\n790\\n],\\n\\"size\\": [\\n350,\\n150\\n],\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"tpsr_model\\",\\n\\"type\\": \\"TRIPOSR_MODEL\\",\\n\\"link\\": 15\\n},\\n{\\n\\"name\\": \\"reference_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 16,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MESH\\",\\n\\"type\\": \\"MESH\\",\\n\\"links\\": [\\n22\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"TripoSRSampler_Zho\\"\\n},\\n\\"widgets_values\\": [\\nfalse,\\n0.85,\\n256,\\n25\\n]\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n660,\\n790\\n],\\n\\"size\\": [\\n340,\\n280\\n],\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 23\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n-50,\\n680\\n],\\n\\"size\\": [\\n320,\\n260\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 12\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 21\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n602393205108157,\\n\\"randomize\\",\\n20,\\n3,\\n\\"dpmpp_2m\\",\\n\\"karras\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n290,\\n990\\n],\\n\\"size\\": [\\n350,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 3\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n20\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"robot toy\\"\\n]\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"PainterNode\\",\\n\\"pos\\": [\\n-380,\\n990\\n],\\n\\"size\\": [\\n650,\\n740\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n18\\n],\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PainterNode\\"\\n},\\n\\"widgets_values\\": [\\n\\"Paint_0.png\\",\\n\\"clear_painer\\",\\nnull\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n3,\\n4,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n5,\\n4,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n8,\\n4,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n10,\\n8,\\n0,\\n10,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n11,\\n4,\\n0,\\n11,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n12,\\n11,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n13,\\n12,\\n0,\\n13,\\n0,\\n\\"RMBGMODEL\\"\\n],\\n[\\n14,\\n8,\\n0,\\n13,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n15,\\n14,\\n0,\\n15,\\n0,\\n\\"TRIPOSR_MODEL\\"\\n],\\n[\\n16,\\n13,\\n0,\\n15,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n18,\\n17,\\n0,\\n18,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n19,\\n19,\\n0,\\n18,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n20,\\n6,\\n0,\\n18,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n21,\\n18,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n22,\\n15,\\n0,\\n20,\\n0,\\n\\"MESH\\"\\n],\\n[\\n23,\\n13,\\n0,\\n21,\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Sketch to 3D【Zho】.json","value":{"title":"Sketch to 3D【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Sketch to 3D【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,_ as data};

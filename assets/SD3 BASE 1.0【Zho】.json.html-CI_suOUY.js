import{_ as r,e,h as b,r as t,o}from"./app-Bge0pb4Y.js";const i={};function s(a,p){const n=t("VueFlow");return o(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 272,
  "last_link_id": 600,
  "nodes": [
    {
      "id": 11,
      "type": "TripleCLIPLoader",
      "pos": [
        -2440,
        1070
      ],
      "size": [
        380,
        110
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            5,
            94
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "TripleCLIPLoader"
      },
      "widgets_values": [
        "clip_g.safetensors",
        "clip_l.safetensors",
        "t5xxl_fp16.safetensors"
      ]
    },
    {
      "id": 252,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -2440,
        920
      ],
      "size": [
        380,
        100
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            565
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            557
          ],
          "shape": 3,
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
      "id": 135,
      "type": "EmptySD3LatentImage",
      "pos": [
        -2440,
        1370
      ],
      "size": [
        380,
        130
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            593
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
      "id": 272,
      "type": "PrimitiveNode",
      "pos": [
        -2440,
        1230
      ],
      "size": [
        380,
        90
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "INT",
          "type": "INT",
          "links": [
            597
          ],
          "slot_index": 0,
          "widget": {
            "name": "seed"
          }
        }
      ],
      "title": "Seed",
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        945512652412924,
        "fixed"
      ]
    },
    {
      "id": 67,
      "type": "ConditioningZeroOut",
      "pos": [
        -2040,
        1340
      ],
      "size": [
        290,
        30
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 580
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            90
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ConditioningZeroOut"
      }
    },
    {
      "id": 68,
      "type": "ConditioningSetTimestepRange",
      "pos": [
        -2040,
        1420
      ],
      "size": [
        290,
        80
      ],
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 90
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            91
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ConditioningSetTimestepRange"
      },
      "widgets_values": [
        0.1,
        1
      ]
    },
    {
      "id": 231,
      "type": "VAEDecode",
      "pos": [
        -2440,
        1550
      ],
      "size": [
        1020,
        50
      ],
      "flags": {
        "collapsed": false
      },
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 596
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 557
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            599
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 233,
      "type": "PreviewImage",
      "pos": [
        -2440,
        1650
      ],
      "size": [
        1020,
        1040
      ],
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 599
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 71,
      "type": "CLIPTextEncode",
      "pos": [
        -2040,
        1180
      ],
      "size": [
        290,
        110
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 94
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            580,
            600
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "title": "CLIP Text Encode (Negative Prompt)",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "bad quality, poor quality, doll, disfigured, jpg, toy, bad anatomy, missing limbs, missing fingers, 3d, cgi"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        -2040,
        920
      ],
      "size": [
        290,
        210
      ],
      "flags": {},
      "order": 4,
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
            595
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "a female character with long, flowing hair that appears to be made of ethereal, swirling patterns resembling the Northern Lights or Aurora Borealis. The background is dominated by deep blues and purples, creating a mysterious and dramatic atmosphere. The character's face is serene, with pale skin and striking features. She wears a dark-colored outfit with subtle patterns. The overall style of the artwork is reminiscent of fantasy or supernatural genres"
      ]
    },
    {
      "id": 70,
      "type": "ConditioningSetTimestepRange",
      "pos": [
        -1730,
        1420
      ],
      "size": [
        310,
        80
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 600,
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            92
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ConditioningSetTimestepRange"
      },
      "widgets_values": [
        0,
        0.1
      ]
    },
    {
      "id": 69,
      "type": "ConditioningCombine",
      "pos": [
        -1730,
        1320
      ],
      "size": [
        310,
        50
      ],
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning_1",
          "type": "CONDITIONING",
          "link": 91
        },
        {
          "name": "conditioning_2",
          "type": "CONDITIONING",
          "link": 92
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            592
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ConditioningCombine"
      }
    },
    {
      "id": 13,
      "type": "ModelSamplingSD3",
      "pos": [
        -1730,
        920
      ],
      "size": [
        310,
        60
      ],
      "flags": {
        "collapsed": false
      },
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 565
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            591
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ModelSamplingSD3"
      },
      "widgets_values": [
        3
      ]
    },
    {
      "id": 271,
      "type": "KSampler",
      "pos": [
        -1730,
        1030
      ],
      "size": [
        310,
        240
      ],
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 591
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 595
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 592
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 593
        },
        {
          "name": "seed",
          "type": "INT",
          "link": 597,
          "widget": {
            "name": "seed"
          },
          "slot_index": 4
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            596
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        945512652412924,
        "fixed",
        28,
        4.5,
        "dpmpp_2m",
        "sgm_uniform",
        1
      ]
    }
  ],
  "links": [
    [
      5,
      11,
      0,
      6,
      0,
      "CLIP"
    ],
    [
      90,
      67,
      0,
      68,
      0,
      "CONDITIONING"
    ],
    [
      91,
      68,
      0,
      69,
      0,
      "CONDITIONING"
    ],
    [
      92,
      70,
      0,
      69,
      1,
      "CONDITIONING"
    ],
    [
      94,
      11,
      0,
      71,
      0,
      "CLIP"
    ],
    [
      557,
      252,
      2,
      231,
      1,
      "VAE"
    ],
    [
      565,
      252,
      0,
      13,
      0,
      "MODEL"
    ],
    [
      580,
      71,
      0,
      67,
      0,
      "CONDITIONING"
    ],
    [
      591,
      13,
      0,
      271,
      0,
      "MODEL"
    ],
    [
      592,
      69,
      0,
      271,
      2,
      "CONDITIONING"
    ],
    [
      593,
      135,
      0,
      271,
      3,
      "LATENT"
    ],
    [
      595,
      6,
      0,
      271,
      1,
      "CONDITIONING"
    ],
    [
      596,
      271,
      0,
      231,
      0,
      "LATENT"
    ],
    [
      597,
      272,
      0,
      271,
      4,
      "INT"
    ],
    [
      599,
      231,
      0,
      233,
      0,
      "IMAGE"
    ],
    [
      600,
      71,
      0,
      70,
      0,
      "CONDITIONING"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.6209213230591556,
      "offset": {
        "0": 3704.894775390625,
        "1": -728.8587646484375
      }
    }
  },
  "version": 0.4
}
`})])}const l=r(i,[["render",s],["__file","SD3 BASE 1.0【Zho】.json.html.vue"]]),m=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20BASE%201.0%E3%80%90Zho%E3%80%91.json.html","title":"SD3 BASE 1.0【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 272, \\"last_link_id\\": 600, \\"nodes\\": [ { \\"id\\": 11, \\"type\\": \\"TripleCLIPLoader\\", \\"pos\\": [ -2440, 1070 ], \\"size\\": [ 380, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20BASE%201.0%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 272, \\"last_link_id\\": 600, \\"nodes\\": [ { \\"id\\": 11, \\"type\\": \\"TripleCLIPLoader\\", \\"pos\\": [ -2440, 1070 ], \\"size\\": [ 380, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.78,"words":833},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 BASE 1.0【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 272,<br>\\n\\"last_link_id\\": 600,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"TripleCLIPLoader\\",<br>\\n\\"pos\\": [<br>\\n-2440,<br>\\n1070<br>\\n],<br>\\n\\"size\\": [<br>\\n380,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n5,<br>\\n94<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"TripleCLIPLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"clip_g.safetensors\\",<br>\\n\\"clip_l.safetensors\\",<br>\\n\\"t5xxl_fp16.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 252,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-2440,<br>\\n920<br>\\n],<br>\\n\\"size\\": [<br>\\n380,<br>\\n100<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n565<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n557<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"sd3_medium.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 135,<br>\\n\\"type\\": \\"EmptySD3LatentImage\\",<br>\\n\\"pos\\": [<br>\\n-2440,<br>\\n1370<br>\\n],<br>\\n\\"size\\": [<br>\\n380,<br>\\n130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n593<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 272,<br>\\n\\"type\\": \\"PrimitiveNode\\",<br>\\n\\"pos\\": [<br>\\n-2440,<br>\\n1230<br>\\n],<br>\\n\\"size\\": [<br>\\n380,<br>\\n90<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"INT\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": [<br>\\n597<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"seed\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Seed\\",<br>\\n\\"properties\\": {<br>\\n\\"Run widget replace on values\\": false<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n945512652412924,<br>\\n\\"fixed\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 67,<br>\\n\\"type\\": \\"ConditioningZeroOut\\",<br>\\n\\"pos\\": [<br>\\n-2040,<br>\\n1340<br>\\n],<br>\\n\\"size\\": [<br>\\n290,<br>\\n30<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 580<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n90<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConditioningZeroOut\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 68,<br>\\n\\"type\\": \\"ConditioningSetTimestepRange\\",<br>\\n\\"pos\\": [<br>\\n-2040,<br>\\n1420<br>\\n],<br>\\n\\"size\\": [<br>\\n290,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 90<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n91<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConditioningSetTimestepRange\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.1,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 231,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n-2440,<br>\\n1550<br>\\n],<br>\\n\\"size\\": [<br>\\n1020,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 596<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 557<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n599<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 233,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n-2440,<br>\\n1650<br>\\n],<br>\\n\\"size\\": [<br>\\n1020,<br>\\n1040<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 599<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 71,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-2040,<br>\\n1180<br>\\n],<br>\\n\\"size\\": [<br>\\n290,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 94<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n580,<br>\\n600<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Negative Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"bad quality, poor quality, doll, disfigured, jpg, toy, bad anatomy, missing limbs, missing fingers, 3d, cgi\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-2040,<br>\\n920<br>\\n],<br>\\n\\"size\\": [<br>\\n290,<br>\\n210<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 5<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n595<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"a female character with long, flowing hair that appears to be made of ethereal, swirling patterns resembling the Northern Lights or Aurora Borealis. The background is dominated by deep blues and purples, creating a mysterious and dramatic atmosphere. The character's face is serene, with pale skin and striking features. She wears a dark-colored outfit with subtle patterns. The overall style of the artwork is reminiscent of fantasy or supernatural genres\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 70,<br>\\n\\"type\\": \\"ConditioningSetTimestepRange\\",<br>\\n\\"pos\\": [<br>\\n-1730,<br>\\n1420<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 600,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n92<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConditioningSetTimestepRange\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0,<br>\\n0.1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 69,<br>\\n\\"type\\": \\"ConditioningCombine\\",<br>\\n\\"pos\\": [<br>\\n-1730,<br>\\n1320<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning_1\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 91<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"conditioning_2\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 92<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n592<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConditioningCombine\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"ModelSamplingSD3\\",<br>\\n\\"pos\\": [<br>\\n-1730,<br>\\n920<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n60<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 565<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n591<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ModelSamplingSD3\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n3<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 271,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-1730,<br>\\n1030<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n240<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 591<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 595<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 592<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 593<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"seed\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": 597,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"seed\\"<br>\\n},<br>\\n\\"slot_index\\": 4<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n596<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n945512652412924,<br>\\n\\"fixed\\",<br>\\n28,<br>\\n4.5,<br>\\n\\"dpmpp_2m\\",<br>\\n\\"sgm_uniform\\",<br>\\n1<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n5,<br>\\n11,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n90,<br>\\n67,<br>\\n0,<br>\\n68,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n91,<br>\\n68,<br>\\n0,<br>\\n69,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n92,<br>\\n70,<br>\\n0,<br>\\n69,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n94,<br>\\n11,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n557,<br>\\n252,<br>\\n2,<br>\\n231,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n565,<br>\\n252,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n580,<br>\\n71,<br>\\n0,<br>\\n67,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n591,<br>\\n13,<br>\\n0,<br>\\n271,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n592,<br>\\n69,<br>\\n0,<br>\\n271,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n593,<br>\\n135,<br>\\n0,<br>\\n271,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n595,<br>\\n6,<br>\\n0,<br>\\n271,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n596,<br>\\n271,<br>\\n0,<br>\\n231,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n597,<br>\\n272,<br>\\n0,<br>\\n271,<br>\\n4,<br>\\n\\"INT\\"<br>\\n],<br>\\n[<br>\\n599,<br>\\n231,<br>\\n0,<br>\\n233,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n600,<br>\\n71,<br>\\n0,<br>\\n70,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 0.6209213230591556,<br>\\n\\"offset\\": {<br>\\n\\"0\\": 3704.894775390625,<br>\\n\\"1\\": -728.8587646484375<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 BASE 1.0【Zho】.json","value":{"title":"SD3 BASE 1.0【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 BASE 1.0【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{l as comp,m as data};

import{_ as e,c as t,b as o,o as i,r as s}from"./app-CmE7YtTQ.js";const a={};function p(d,r){const n=s("VueFlow");return i(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(a,[["render",p],["__file","SD3 BASE 1.0【Zho】.json.html.vue"]]),N=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20BASE%201.0%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 272, \\"last_link_id\\": 600, \\"nodes\\": [ { \\"id\\": 11, \\"type\\": \\"TripleCLIPLoader\\", \\"pos\\": [ -2440, 1070 ], \\"size\\": [ 380, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20BASE%201.0%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 272, \\"last_link_id\\": 600, \\"nodes\\": [ { \\"id\\": 11, \\"type\\": \\"TripleCLIPLoader\\", \\"pos\\": [ -2440, 1070 ], \\"size\\": [ 380, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.78,"words":833},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 BASE 1.0【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 272,\\n\\"last_link_id\\": 600,\\n\\"nodes\\": [\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"TripleCLIPLoader\\",\\n\\"pos\\": [\\n-2440,\\n1070\\n],\\n\\"size\\": [\\n380,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n5,\\n94\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"TripleCLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"clip_g.safetensors\\",\\n\\"clip_l.safetensors\\",\\n\\"t5xxl_fp16.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 252,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-2440,\\n920\\n],\\n\\"size\\": [\\n380,\\n100\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n565\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n557\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"sd3_medium.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 135,\\n\\"type\\": \\"EmptySD3LatentImage\\",\\n\\"pos\\": [\\n-2440,\\n1370\\n],\\n\\"size\\": [\\n380,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n593\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptySD3LatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1024,\\n1\\n]\\n},\\n{\\n\\"id\\": 272,\\n\\"type\\": \\"PrimitiveNode\\",\\n\\"pos\\": [\\n-2440,\\n1230\\n],\\n\\"size\\": [\\n380,\\n90\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"INT\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": [\\n597\\n],\\n\\"slot_index\\": 0,\\n\\"widget\\": {\\n\\"name\\": \\"seed\\"\\n}\\n}\\n],\\n\\"title\\": \\"Seed\\",\\n\\"properties\\": {\\n\\"Run widget replace on values\\": false\\n},\\n\\"widgets_values\\": [\\n945512652412924,\\n\\"fixed\\"\\n]\\n},\\n{\\n\\"id\\": 67,\\n\\"type\\": \\"ConditioningZeroOut\\",\\n\\"pos\\": [\\n-2040,\\n1340\\n],\\n\\"size\\": [\\n290,\\n30\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 580\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n90\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConditioningZeroOut\\"\\n}\\n},\\n{\\n\\"id\\": 68,\\n\\"type\\": \\"ConditioningSetTimestepRange\\",\\n\\"pos\\": [\\n-2040,\\n1420\\n],\\n\\"size\\": [\\n290,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 90\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n91\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConditioningSetTimestepRange\\"\\n},\\n\\"widgets_values\\": [\\n0.1,\\n1\\n]\\n},\\n{\\n\\"id\\": 231,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n-2440,\\n1550\\n],\\n\\"size\\": [\\n1020,\\n50\\n],\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 596\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 557\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n599\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 233,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n-2440,\\n1650\\n],\\n\\"size\\": [\\n1020,\\n1040\\n],\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 599\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 71,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-2040,\\n1180\\n],\\n\\"size\\": [\\n290,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 94\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n580,\\n600\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Negative Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"bad quality, poor quality, doll, disfigured, jpg, toy, bad anatomy, missing limbs, missing fingers, 3d, cgi\\"\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-2040,\\n920\\n],\\n\\"size\\": [\\n290,\\n210\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 5\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n595\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"a female character with long, flowing hair that appears to be made of ethereal, swirling patterns resembling the Northern Lights or Aurora Borealis. The background is dominated by deep blues and purples, creating a mysterious and dramatic atmosphere. The character's face is serene, with pale skin and striking features. She wears a dark-colored outfit with subtle patterns. The overall style of the artwork is reminiscent of fantasy or supernatural genres\\"\\n]\\n},\\n{\\n\\"id\\": 70,\\n\\"type\\": \\"ConditioningSetTimestepRange\\",\\n\\"pos\\": [\\n-1730,\\n1420\\n],\\n\\"size\\": [\\n310,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 600,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n92\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConditioningSetTimestepRange\\"\\n},\\n\\"widgets_values\\": [\\n0,\\n0.1\\n]\\n},\\n{\\n\\"id\\": 69,\\n\\"type\\": \\"ConditioningCombine\\",\\n\\"pos\\": [\\n-1730,\\n1320\\n],\\n\\"size\\": [\\n310,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning_1\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 91\\n},\\n{\\n\\"name\\": \\"conditioning_2\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 92\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n592\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConditioningCombine\\"\\n}\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"ModelSamplingSD3\\",\\n\\"pos\\": [\\n-1730,\\n920\\n],\\n\\"size\\": [\\n310,\\n60\\n],\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 565\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n591\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ModelSamplingSD3\\"\\n},\\n\\"widgets_values\\": [\\n3\\n]\\n},\\n{\\n\\"id\\": 271,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n-1730,\\n1030\\n],\\n\\"size\\": [\\n310,\\n240\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 591\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 595\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 592\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 593\\n},\\n{\\n\\"name\\": \\"seed\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": 597,\\n\\"widget\\": {\\n\\"name\\": \\"seed\\"\\n},\\n\\"slot_index\\": 4\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n596\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n945512652412924,\\n\\"fixed\\",\\n28,\\n4.5,\\n\\"dpmpp_2m\\",\\n\\"sgm_uniform\\",\\n1\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n5,\\n11,\\n0,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n90,\\n67,\\n0,\\n68,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n91,\\n68,\\n0,\\n69,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n92,\\n70,\\n0,\\n69,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n94,\\n11,\\n0,\\n71,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n557,\\n252,\\n2,\\n231,\\n1,\\n\\"VAE\\"\\n],\\n[\\n565,\\n252,\\n0,\\n13,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n580,\\n71,\\n0,\\n67,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n591,\\n13,\\n0,\\n271,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n592,\\n69,\\n0,\\n271,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n593,\\n135,\\n0,\\n271,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n595,\\n6,\\n0,\\n271,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n596,\\n271,\\n0,\\n231,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n597,\\n272,\\n0,\\n271,\\n4,\\n\\"INT\\"\\n],\\n[\\n599,\\n231,\\n0,\\n233,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n600,\\n71,\\n0,\\n70,\\n0,\\n\\"CONDITIONING\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.6209213230591556,\\n\\"offset\\": {\\n\\"0\\": 3704.894775390625,\\n\\"1\\": -728.8587646484375\\n}\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 BASE 1.0【Zho】.json","value":{"title":"SD3 BASE 1.0【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 BASE 1.0【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{m as comp,N as data};

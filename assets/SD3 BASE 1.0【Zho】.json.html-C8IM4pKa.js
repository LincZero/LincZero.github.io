import{_ as t,c as o,b as r,r as u,o as q}from"./app-CQkeIggD.js";const e={};function b(i,s){const n=u("VueFlow");return q(),o("div",null,[r(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const p=t(e,[["render",b]]),d=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20BASE%201.0%E3%80%90Zho%E3%80%91.json.html","title":"SD3 BASE 1.0【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 272, &quot;last_link_id&quot;: 600, &quot;nodes&quot;: [ { &quot;id&quot;: 11, &quot;type&quot;: &quot;TripleCLIPLoader&quot;, &quot;pos&quot;: [ -24...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/SD3%20BASE%201.0%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 272, &quot;last_link_id&quot;: 600, &quot;nodes&quot;: [ { &quot;id&quot;: 11, &quot;type&quot;: &quot;TripleCLIPLoader&quot;, &quot;pos&quot;: [ -24..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.78,"words":833},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 BASE 1.0【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 272,<br>\\n&quot;last_link_id&quot;: 600,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 11,<br>\\n&quot;type&quot;: &quot;TripleCLIPLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2440,<br>\\n1070<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n380,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n5,<br>\\n94<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;TripleCLIPLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;clip_g.safetensors&quot;,<br>\\n&quot;clip_l.safetensors&quot;,<br>\\n&quot;t5xxl_fp16.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 252,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2440,<br>\\n920<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n380,<br>\\n100<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n565<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n557<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;sd3_medium.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 135,<br>\\n&quot;type&quot;: &quot;EmptySD3LatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2440,<br>\\n1370<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n380,<br>\\n130<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n593<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptySD3LatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1024,<br>\\n1024,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 272,<br>\\n&quot;type&quot;: &quot;PrimitiveNode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2440,<br>\\n1230<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n380,<br>\\n90<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;INT&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;links&quot;: [<br>\\n597<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;seed&quot;<br>\\n}<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;Seed&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Run widget replace on values&quot;: false<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n945512652412924,<br>\\n&quot;fixed&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 67,<br>\\n&quot;type&quot;: &quot;ConditioningZeroOut&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2040,<br>\\n1340<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n290,<br>\\n30<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 580<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n90<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ConditioningZeroOut&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 68,<br>\\n&quot;type&quot;: &quot;ConditioningSetTimestepRange&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2040,<br>\\n1420<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n290,<br>\\n80<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 90<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n91<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ConditioningSetTimestepRange&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0.1,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 231,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2440,<br>\\n1550<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n1020,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 596<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 557<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n599<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 233,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2440,<br>\\n1650<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n1020,<br>\\n1040<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 599<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 71,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2040,<br>\\n1180<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n290,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 94<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n580,<br>\\n600<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;CLIP Text Encode (Negative Prompt)&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;bad quality, poor quality, doll, disfigured, jpg, toy, bad anatomy, missing limbs, missing fingers, 3d, cgi&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2040,<br>\\n920<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n290,<br>\\n210<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 5<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n595<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;a female character with long, flowing hair that appears to be made of ethereal, swirling patterns resembling the Northern Lights or Aurora Borealis. The background is dominated by deep blues and purples, creating a mysterious and dramatic atmosphere. The character's face is serene, with pale skin and striking features. She wears a dark-colored outfit with subtle patterns. The overall style of the artwork is reminiscent of fantasy or supernatural genres&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 70,<br>\\n&quot;type&quot;: &quot;ConditioningSetTimestepRange&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-1730,<br>\\n1420<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n80<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 600,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n92<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ConditioningSetTimestepRange&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0,<br>\\n0.1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 69,<br>\\n&quot;type&quot;: &quot;ConditioningCombine&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-1730,<br>\\n1320<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning_1&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 91<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning_2&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 92<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n592<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ConditioningCombine&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 13,<br>\\n&quot;type&quot;: &quot;ModelSamplingSD3&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-1730,<br>\\n920<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n60<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 565<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n591<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ModelSamplingSD3&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n3<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 271,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-1730,<br>\\n1030<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n240<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 591<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 595<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 592<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 593<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;seed&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;link&quot;: 597,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;seed&quot;<br>\\n},<br>\\n&quot;slot_index&quot;: 4<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n596<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n945512652412924,<br>\\n&quot;fixed&quot;,<br>\\n28,<br>\\n4.5,<br>\\n&quot;dpmpp_2m&quot;,<br>\\n&quot;sgm_uniform&quot;,<br>\\n1<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n5,<br>\\n11,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n90,<br>\\n67,<br>\\n0,<br>\\n68,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n91,<br>\\n68,<br>\\n0,<br>\\n69,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n92,<br>\\n70,<br>\\n0,<br>\\n69,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n94,<br>\\n11,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n557,<br>\\n252,<br>\\n2,<br>\\n231,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n565,<br>\\n252,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n580,<br>\\n71,<br>\\n0,<br>\\n67,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n591,<br>\\n13,<br>\\n0,<br>\\n271,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n592,<br>\\n69,<br>\\n0,<br>\\n271,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n593,<br>\\n135,<br>\\n0,<br>\\n271,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n595,<br>\\n6,<br>\\n0,<br>\\n271,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n596,<br>\\n271,<br>\\n0,<br>\\n231,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n597,<br>\\n272,<br>\\n0,<br>\\n271,<br>\\n4,<br>\\n&quot;INT&quot;<br>\\n],<br>\\n[<br>\\n599,<br>\\n231,<br>\\n0,<br>\\n233,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n600,<br>\\n71,<br>\\n0,<br>\\n70,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 0.6209213230591556,<br>\\n&quot;offset&quot;: {<br>\\n&quot;0&quot;: 3704.894775390625,<br>\\n&quot;1&quot;: -728.8587646484375<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 BASE 1.0【Zho】.json","value":{"title":"SD3 BASE 1.0【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/SD3 BASE 1.0【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{p as comp,d as data};

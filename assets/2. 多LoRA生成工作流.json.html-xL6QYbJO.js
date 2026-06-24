import{_ as t,c as o,b as u,r,o as q}from"./app-k1oQHSab.js";const e={};function b(a,l){const n=r("VueFlow");return q(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 19,
  "last_link_id": 40,
  "nodes": [
    {
      "id": 6,
      "type": "EmptyLatentImage",
      "pos": [
        650,
        340
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7
          ],
          "shape": 3,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        768,
        768,
        1
      ]
    },
    {
      "id": 8,
      "type": "VAELoader",
      "pos": [
        650,
        150
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            33
          ],
          "shape": 3,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "animevae.pt"
      ]
    },
    {
      "id": 2,
      "type": "CLIPSetLastLayer",
      "pos": [
        650,
        250
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 1,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            24
          ],
          "shape": 3,
          "label": "CLIP"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPSetLastLayer"
      },
      "widgets_values": [
        -2
      ]
    },
    {
      "id": 1,
      "type": "CheckpointLoaderSimple",
      "pos": [
        650,
        10
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            23
          ],
          "shape": 3,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            1
          ],
          "shape": 3,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "shape": 3,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "majicmixLux_v3.safetensors"
      ]
    },
    {
      "id": 3,
      "type": "CLIPTextEncode",
      "pos": [
        1360,
        -10
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 39,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            5
          ],
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "official art, unity 8k wallpaper, ultra detailed, beautiful and aesthetic, beautiful, masterpiece, best quality, (zentangle, mandala, tangle, entangle) , upper body, portrait, detailed face, looking at viewer, front, highres, lu1, cyborg, multicolored hair, makeup, bare shoulders, black leotard, white jacket, open jacket, belt, shorts, , planet, moon, earth (planet),"
      ]
    },
    {
      "id": 4,
      "type": "CLIPTextEncode",
      "pos": [
        1360,
        240
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 40,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6
          ],
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, (worst quality:1.2), low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, lowres graffiti, (low quality lowres simple background:1.1),"
      ]
    },
    {
      "id": 17,
      "type": "VAEDecode",
      "pos": [
        2110,
        170
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 31,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 33,
          "label": "VAE",
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            32
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        2350,
        0
      ],
      "size": {
        "0": 320,
        "1": 270
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 32,
          "label": "图像"
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 5,
      "type": "KSampler",
      "pos": [
        1780,
        -10
      ],
      "size": {
        "0": 320,
        "1": 470
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 38,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 5,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 6,
          "label": "负面条件"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 7,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            31
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        47411568428939,
        "randomize",
        50,
        7,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 16,
      "type": "LoraLoader",
      "pos": [
        1010,
        -10
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 23,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 24,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            34
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            35
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "lucy_(cyberpunk)_v10.safetensors",
        0.8,
        0.6
      ]
    },
    {
      "id": 18,
      "type": "LoraLoader",
      "pos": [
        1010,
        160
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 34,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 35,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            36
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            37
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "3DMM_V12.safetensors",
        0.8,
        0.8
      ]
    },
    {
      "id": 19,
      "type": "LoraLoader",
      "pos": [
        1010,
        330
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 36,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 37,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            38
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            39,
            40
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "epi_noiseoffset2.safetensors",
        0.3,
        0.3
      ]
    }
  ],
  "links": [
    [
      1,
      1,
      1,
      2,
      0,
      "CLIP"
    ],
    [
      5,
      3,
      0,
      5,
      1,
      "CONDITIONING"
    ],
    [
      6,
      4,
      0,
      5,
      2,
      "CONDITIONING"
    ],
    [
      7,
      6,
      0,
      5,
      3,
      "LATENT"
    ],
    [
      23,
      1,
      0,
      16,
      0,
      "MODEL"
    ],
    [
      24,
      2,
      0,
      16,
      1,
      "CLIP"
    ],
    [
      31,
      5,
      0,
      17,
      0,
      "LATENT"
    ],
    [
      32,
      17,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      33,
      8,
      0,
      17,
      1,
      "VAE"
    ],
    [
      34,
      16,
      0,
      18,
      0,
      "MODEL"
    ],
    [
      35,
      16,
      1,
      18,
      1,
      "CLIP"
    ],
    [
      36,
      18,
      0,
      19,
      0,
      "MODEL"
    ],
    [
      37,
      18,
      1,
      19,
      1,
      "CLIP"
    ],
    [
      38,
      19,
      0,
      5,
      0,
      "MODEL"
    ],
    [
      39,
      19,
      1,
      3,
      0,
      "CLIP"
    ],
    [
      40,
      19,
      1,
      4,
      0,
      "CLIP"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "0246.VERSION": [
      0,
      0,
      4
    ]
  },
  "version": 0.4
}
`})])}const i=t(e,[["render",b]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20%E5%A4%9ALoRA%E7%94%9F%E6%88%90%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html","title":"2. 多LoRA生成工作流.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 19, &quot;last_link_id&quot;: 40, &quot;nodes&quot;: [ { &quot;id&quot;: 6, &quot;type&quot;: &quot;EmptyLatentImage&quot;, &quot;pos&quot;: [ 650, 3...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20%E5%A4%9ALoRA%E7%94%9F%E6%88%90%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 19, &quot;last_link_id&quot;: 40, &quot;nodes&quot;: [ { &quot;id&quot;: 6, &quot;type&quot;: &quot;EmptyLatentImage&quot;, &quot;pos&quot;: [ 650, 3..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.85,"words":856},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/2. 多LoRA生成工作流.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 19,<br>\\n&quot;last_link_id&quot;: 40,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n650,<br>\\n340<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n768,<br>\\n768,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAELoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n650,<br>\\n150<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n33<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAELoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;<a href=\\"http://animevae.pt\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">animevae.pt</a>&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 2,<br>\\n&quot;type&quot;: &quot;CLIPSetLastLayer&quot;,<br>\\n&quot;pos&quot;: [<br>\\n650,<br>\\n250<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 1,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n24<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPSetLastLayer&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n-2<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 1,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n650,<br>\\n10<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n23<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n1<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;majicmixLux_v3.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1360,<br>\\n-10<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 400,<br>\\n&quot;1&quot;: 200<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 39,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n5<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;official art, unity 8k wallpaper, ultra detailed, beautiful and aesthetic, beautiful, masterpiece, best quality, (zentangle, mandala, tangle, entangle) , upper body, portrait, detailed face, looking at viewer, front, highres, lu1, cyborg, multicolored hair, makeup, bare shoulders, black leotard, white jacket, open jacket, belt, shorts, , planet, moon, earth (planet),&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 4,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1360,<br>\\n240<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 400,<br>\\n&quot;1&quot;: 200<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 40,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n6<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, (worst quality:1.2), low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, lowres graffiti, (low quality lowres simple background:1.1),&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 17,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2110,<br>\\n170<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 31,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 33,<br>\\n&quot;label&quot;: &quot;VAE&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n32<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 9,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2350,<br>\\n0<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 270<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 32,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 5,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1780,<br>\\n-10<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 470<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 38,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 5,<br>\\n&quot;label&quot;: &quot;正面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 6,<br>\\n&quot;label&quot;: &quot;负面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 7,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n31<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n47411568428939,<br>\\n&quot;randomize&quot;,<br>\\n50,<br>\\n7,<br>\\n&quot;dpmpp_2m&quot;,<br>\\n&quot;karras&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 16,<br>\\n&quot;type&quot;: &quot;LoraLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1010,<br>\\n-10<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 126<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 23,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 24,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n34<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;模型&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n35<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoraLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;lucy_(cyberpunk)_v10.safetensors&quot;,<br>\\n0.8,<br>\\n0.6<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 18,<br>\\n&quot;type&quot;: &quot;LoraLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1010,<br>\\n160<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 126<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 34,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 35,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n36<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;模型&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n37<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoraLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;3DMM_V12.safetensors&quot;,<br>\\n0.8,<br>\\n0.8<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 19,<br>\\n&quot;type&quot;: &quot;LoraLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1010,<br>\\n330<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 126<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 36,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 37,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n38<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;模型&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n39,<br>\\n40<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoraLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;epi_noiseoffset2.safetensors&quot;,<br>\\n0.3,<br>\\n0.3<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n2,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n5,<br>\\n3,<br>\\n0,<br>\\n5,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n4,<br>\\n0,<br>\\n5,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n6,<br>\\n0,<br>\\n5,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n23,<br>\\n1,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n24,<br>\\n2,<br>\\n0,<br>\\n16,<br>\\n1,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n31,<br>\\n5,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n32,<br>\\n17,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n33,<br>\\n8,<br>\\n0,<br>\\n17,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n34,<br>\\n16,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n35,<br>\\n16,<br>\\n1,<br>\\n18,<br>\\n1,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n36,<br>\\n18,<br>\\n0,<br>\\n19,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n37,<br>\\n18,<br>\\n1,<br>\\n19,<br>\\n1,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n38,<br>\\n19,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n39,<br>\\n19,<br>\\n1,<br>\\n3,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n40,<br>\\n19,<br>\\n1,<br>\\n4,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;0246.VERSION&quot;: [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/2. 多LoRA生成工作流.json","value":{"title":"2. 多LoRA生成工作流.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/2. 多LoRA生成工作流.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,p as data};

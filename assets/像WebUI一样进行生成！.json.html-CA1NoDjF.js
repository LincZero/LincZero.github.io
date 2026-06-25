import{_ as t,c as o,b as u,r,o as q}from"./app-CQkeIggD.js";const e={};function b(a,s){const n=r("VueFlow");return q(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 28,
  "last_link_id": 48,
  "nodes": [
    {
      "id": 8,
      "type": "VAELoader",
      "pos": [
        670,
        440
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            32
          ],
          "shape": 3,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "vae-ft-mse-840000-ema-pruned.safetensors"
      ]
    },
    {
      "id": 1,
      "type": "CheckpointLoaderSimple",
      "pos": [
        670,
        130
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            44
          ],
          "shape": 3,
          "label": "MODEL",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            42,
            43
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "shape": 3,
          "label": "VAE",
          "slot_index": 2
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
      "id": 27,
      "type": "BNK_CLIPTextEncodeAdvanced",
      "pos": [
        1020,
        60
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 42,
          "label": "clip"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            45
          ],
          "shape": 3,
          "label": "CONDITIONING",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "BNK_CLIPTextEncodeAdvanced"
      },
      "widgets_values": [
        "era elf,(giant elves sit on the treetops:1.2),enchanting beauty,(fantasy),(elf mother tree),(world tree),ethereal glow,pointed ears,delicate facial features,long elegant hair,mystical ambiance,soft lighting,tranquil expression,harmonious with nature,subtle magical elements,serene,dreamlike quality,pastel colors,(castle)",
        "none",
        "A1111"
      ]
    },
    {
      "id": 16,
      "type": "SaveImage",
      "pos": [
        1800,
        160
      ],
      "size": {
        "0": 250,
        "1": 340
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 31,
          "label": "images"
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 17,
      "type": "VAEDecode",
      "pos": [
        1780,
        60
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 47,
          "label": "samples",
          "slot_index": 0
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 32,
          "label": "vae",
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            31
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 6,
      "type": "EmptyLatentImage",
      "pos": [
        670,
        280
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            48
          ],
          "shape": 3,
          "label": "LATENT",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        512,
        768,
        1
      ]
    },
    {
      "id": 28,
      "type": "BNK_CLIPTextEncodeAdvanced",
      "pos": [
        1020,
        310
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 43,
          "label": "clip"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            46
          ],
          "shape": 3,
          "label": "CONDITIONING"
        }
      ],
      "properties": {
        "Node name for S&R": "BNK_CLIPTextEncodeAdvanced"
      },
      "widgets_values": [
        "(worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, watermark",
        "none",
        "A1111"
      ]
    },
    {
      "id": 26,
      "type": "KSampler //Inspire",
      "pos": [
        1450,
        110
      ],
      "size": {
        "0": 315,
        "1": 382
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 44,
          "label": "model"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 45,
          "label": "positive"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 46,
          "label": "negative",
          "slot_index": 2
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 48,
          "label": "latent_image",
          "slot_index": 3
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            47
          ],
          "shape": 3,
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler //Inspire"
      },
      "widgets_values": [
        1119808910974861,
        "randomize",
        20,
        8,
        "dpmpp_2m",
        "karras",
        1,
        "GPU(=A1111)",
        "incremental",
        0,
        0,
        "linear"
      ]
    }
  ],
  "links": [
    [
      31,
      17,
      0,
      16,
      0,
      "IMAGE"
    ],
    [
      32,
      8,
      0,
      17,
      1,
      "VAE"
    ],
    [
      42,
      1,
      1,
      27,
      0,
      "CLIP"
    ],
    [
      43,
      1,
      1,
      28,
      0,
      "CLIP"
    ],
    [
      44,
      1,
      0,
      26,
      0,
      "MODEL"
    ],
    [
      45,
      27,
      0,
      26,
      1,
      "CONDITIONING"
    ],
    [
      46,
      28,
      0,
      26,
      2,
      "CONDITIONING"
    ],
    [
      47,
      26,
      0,
      17,
      0,
      "LATENT"
    ],
    [
      48,
      6,
      0,
      26,
      3,
      "LATENT"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "0246.VERSION": [
      0,
      0,
      4
    ],
    "ds": {
      "scale": 1,
      "offset": {
        "0": -385.9446679955918,
        "1": 125.7938046390797
      }
    }
  },
  "version": 0.4
}
`})])}const i=t(e,[["render",b]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%83%8FWebUI%E4%B8%80%E6%A0%B7%E8%BF%9B%E8%A1%8C%E7%94%9F%E6%88%90%EF%BC%81.json.html","title":"像WebUI一样进行生成！.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 28, &quot;last_link_id&quot;: 48, &quot;nodes&quot;: [ { &quot;id&quot;: 8, &quot;type&quot;: &quot;VAELoader&quot;, &quot;pos&quot;: [ 670, 440 ], &...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%83%8FWebUI%E4%B8%80%E6%A0%B7%E8%BF%9B%E8%A1%8C%E7%94%9F%E6%88%90%EF%BC%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 28, &quot;last_link_id&quot;: 48, &quot;nodes&quot;: [ { &quot;id&quot;: 8, &quot;type&quot;: &quot;VAELoader&quot;, &quot;pos&quot;: [ 670, 440 ], &..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":1.84,"words":553},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/像WebUI一样进行生成！.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 28,<br>\\n&quot;last_link_id&quot;: 48,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAELoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n670,<br>\\n440<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n32<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAELoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;vae-ft-mse-840000-ema-pruned.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 1,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n670,<br>\\n130<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n44<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;MODEL&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n42,<br>\\n43<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;VAE&quot;,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;majicmixLux_v3.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 27,<br>\\n&quot;type&quot;: &quot;BNK_CLIPTextEncodeAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1020,<br>\\n60<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 400,<br>\\n&quot;1&quot;: 200<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 42,<br>\\n&quot;label&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n45<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BNK_CLIPTextEncodeAdvanced&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;era elf,(giant elves sit on the treetops:1.2),enchanting beauty,(fantasy),(elf mother tree),(world tree),ethereal glow,pointed ears,delicate facial features,long elegant hair,mystical ambiance,soft lighting,tranquil expression,harmonious with nature,subtle magical elements,serene,dreamlike quality,pastel colors,(castle)&quot;,<br>\\n&quot;none&quot;,<br>\\n&quot;A1111&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 16,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1800,<br>\\n160<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 250,<br>\\n&quot;1&quot;: 340<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 31,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 17,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1780,<br>\\n60<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 47,<br>\\n&quot;label&quot;: &quot;samples&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 32,<br>\\n&quot;label&quot;: &quot;vae&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n31<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n670,<br>\\n280<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n48<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;LATENT&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n512,<br>\\n768,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 28,<br>\\n&quot;type&quot;: &quot;BNK_CLIPTextEncodeAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1020,<br>\\n310<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 400,<br>\\n&quot;1&quot;: 200<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 43,<br>\\n&quot;label&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n46<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CONDITIONING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BNK_CLIPTextEncodeAdvanced&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;(worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, watermark&quot;,<br>\\n&quot;none&quot;,<br>\\n&quot;A1111&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 26,<br>\\n&quot;type&quot;: &quot;KSampler //Inspire&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1450,<br>\\n110<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 382<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 44,<br>\\n&quot;label&quot;: &quot;model&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 45,<br>\\n&quot;label&quot;: &quot;positive&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 46,<br>\\n&quot;label&quot;: &quot;negative&quot;,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 48,<br>\\n&quot;label&quot;: &quot;latent_image&quot;,<br>\\n&quot;slot_index&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n47<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler //Inspire&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1119808910974861,<br>\\n&quot;randomize&quot;,<br>\\n20,<br>\\n8,<br>\\n&quot;dpmpp_2m&quot;,<br>\\n&quot;karras&quot;,<br>\\n1,<br>\\n&quot;GPU(=A1111)&quot;,<br>\\n&quot;incremental&quot;,<br>\\n0,<br>\\n0,<br>\\n&quot;linear&quot;<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n31,<br>\\n17,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n32,<br>\\n8,<br>\\n0,<br>\\n17,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n42,<br>\\n1,<br>\\n1,<br>\\n27,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n43,<br>\\n1,<br>\\n1,<br>\\n28,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n44,<br>\\n1,<br>\\n0,<br>\\n26,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n45,<br>\\n27,<br>\\n0,<br>\\n26,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n46,<br>\\n28,<br>\\n0,<br>\\n26,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n47,<br>\\n26,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n48,<br>\\n6,<br>\\n0,<br>\\n26,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;0246.VERSION&quot;: [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n],<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 1,<br>\\n&quot;offset&quot;: {<br>\\n&quot;0&quot;: -385.9446679955918,<br>\\n&quot;1&quot;: 125.7938046390797<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/像WebUI一样进行生成！.json","value":{"title":"像WebUI一样进行生成！.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/像WebUI一样进行生成！.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,p as data};

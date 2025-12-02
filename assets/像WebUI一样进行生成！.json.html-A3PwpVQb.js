import{_ as r,c as e,d as b,r as t,o as a}from"./app-U6aqFarS.js";const o={};function s(l,i){const n=t("VueFlow");return a(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const d=r(o,[["render",s]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%83%8FWebUI%E4%B8%80%E6%A0%B7%E8%BF%9B%E8%A1%8C%E7%94%9F%E6%88%90%EF%BC%81.json.html","title":"像WebUI一样进行生成！.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 28, \\"last_link_id\\": 48, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAELoader\\", \\"pos\\": [ 670, 440 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"out...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%83%8FWebUI%E4%B8%80%E6%A0%B7%E8%BF%9B%E8%A1%8C%E7%94%9F%E6%88%90%EF%BC%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 28, \\"last_link_id\\": 48, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAELoader\\", \\"pos\\": [ 670, 440 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"out..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":1.84,"words":553},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/像WebUI一样进行生成！.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 28,<br>\\n\\"last_link_id\\": 48,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAELoader\\",<br>\\n\\"pos\\": [<br>\\n670,<br>\\n440<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n32<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"vae-ft-mse-840000-ema-pruned.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 1,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n670,<br>\\n130<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n44<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"MODEL\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n42,<br>\\n43<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\",<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"majicmixLux_v3.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 27,<br>\\n\\"type\\": \\"BNK_CLIPTextEncodeAdvanced\\",<br>\\n\\"pos\\": [<br>\\n1020,<br>\\n60<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 200<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 42,<br>\\n\\"label\\": \\"clip\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n45<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONDITIONING\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BNK_CLIPTextEncodeAdvanced\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"era elf,(giant elves sit on the treetops:1.2),enchanting beauty,(fantasy),(elf mother tree),(world tree),ethereal glow,pointed ears,delicate facial features,long elegant hair,mystical ambiance,soft lighting,tranquil expression,harmonious with nature,subtle magical elements,serene,dreamlike quality,pastel colors,(castle)\\",<br>\\n\\"none\\",<br>\\n\\"A1111\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n1800,<br>\\n160<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 250,<br>\\n\\"1\\": 340<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 31,<br>\\n\\"label\\": \\"images\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 17,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n1780,<br>\\n60<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 47,<br>\\n\\"label\\": \\"samples\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 32,<br>\\n\\"label\\": \\"vae\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n31<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n670,<br>\\n280<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n48<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"LATENT\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n512,<br>\\n768,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 28,<br>\\n\\"type\\": \\"BNK_CLIPTextEncodeAdvanced\\",<br>\\n\\"pos\\": [<br>\\n1020,<br>\\n310<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 200<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 43,<br>\\n\\"label\\": \\"clip\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n46<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONDITIONING\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BNK_CLIPTextEncodeAdvanced\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"(worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, watermark\\",<br>\\n\\"none\\",<br>\\n\\"A1111\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 26,<br>\\n\\"type\\": \\"KSampler //Inspire\\",<br>\\n\\"pos\\": [<br>\\n1450,<br>\\n110<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 382<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 44,<br>\\n\\"label\\": \\"model\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 45,<br>\\n\\"label\\": \\"positive\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 46,<br>\\n\\"label\\": \\"negative\\",<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 48,<br>\\n\\"label\\": \\"latent_image\\",<br>\\n\\"slot_index\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n47<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"LATENT\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler //Inspire\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1119808910974861,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n8,<br>\\n\\"dpmpp_2m\\",<br>\\n\\"karras\\",<br>\\n1,<br>\\n\\"GPU(=A1111)\\",<br>\\n\\"incremental\\",<br>\\n0,<br>\\n0,<br>\\n\\"linear\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n31,<br>\\n17,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n32,<br>\\n8,<br>\\n0,<br>\\n17,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n42,<br>\\n1,<br>\\n1,<br>\\n27,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n43,<br>\\n1,<br>\\n1,<br>\\n28,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n44,<br>\\n1,<br>\\n0,<br>\\n26,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n45,<br>\\n27,<br>\\n0,<br>\\n26,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n46,<br>\\n28,<br>\\n0,<br>\\n26,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n47,<br>\\n26,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n48,<br>\\n6,<br>\\n0,<br>\\n26,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n],<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 1,<br>\\n\\"offset\\": {<br>\\n\\"0\\": -385.9446679955918,<br>\\n\\"1\\": 125.7938046390797<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/像WebUI一样进行生成！.json","value":{"title":"像WebUI一样进行生成！.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/像WebUI一样进行生成！.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

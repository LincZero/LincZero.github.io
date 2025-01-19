import{_ as e,c as t,b as a,o,r as s}from"./app-uEZYZ2I0.js";const l={};function i(p,r){const n=s("VueFlow");return o(),t("div",null,[a(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(l,[["render",i],["__file","像WebUI一样进行生成！.json.html.vue"]]),I=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%83%8FWebUI%E4%B8%80%E6%A0%B7%E8%BF%9B%E8%A1%8C%E7%94%9F%E6%88%90%EF%BC%81.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 28, \\"last_link_id\\": 48, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAELoader\\", \\"pos\\": [ 670, 440 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"out...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%83%8FWebUI%E4%B8%80%E6%A0%B7%E8%BF%9B%E8%A1%8C%E7%94%9F%E6%88%90%EF%BC%81.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 28, \\"last_link_id\\": 48, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAELoader\\", \\"pos\\": [ 670, 440 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"out..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.84,"words":553},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/像WebUI一样进行生成！.json","excerpt":"<p>{\\n\\"last_node_id\\": 28,\\n\\"last_link_id\\": 48,\\n\\"nodes\\": [\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAELoader\\",\\n\\"pos\\": [\\n670,\\n440\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n32\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"vae-ft-mse-840000-ema-pruned.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 1,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n670,\\n130\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n44\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"MODEL\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n42,\\n43\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\",\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"majicmixLux_v3.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 27,\\n\\"type\\": \\"BNK_CLIPTextEncodeAdvanced\\",\\n\\"pos\\": [\\n1020,\\n60\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 200\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 42,\\n\\"label\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n45\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONDITIONING\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BNK_CLIPTextEncodeAdvanced\\"\\n},\\n\\"widgets_values\\": [\\n\\"era elf,(giant elves sit on the treetops:1.2),enchanting beauty,(fantasy),(elf mother tree),(world tree),ethereal glow,pointed ears,delicate facial features,long elegant hair,mystical ambiance,soft lighting,tranquil expression,harmonious with nature,subtle magical elements,serene,dreamlike quality,pastel colors,(castle)\\",\\n\\"none\\",\\n\\"A1111\\"\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n1800,\\n160\\n],\\n\\"size\\": {\\n\\"0\\": 250,\\n\\"1\\": 340\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 31,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n1780,\\n60\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 47,\\n\\"label\\": \\"samples\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 32,\\n\\"label\\": \\"vae\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n31\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n670,\\n280\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n48\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"LATENT\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n512,\\n768,\\n1\\n]\\n},\\n{\\n\\"id\\": 28,\\n\\"type\\": \\"BNK_CLIPTextEncodeAdvanced\\",\\n\\"pos\\": [\\n1020,\\n310\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 200\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 43,\\n\\"label\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n46\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONDITIONING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BNK_CLIPTextEncodeAdvanced\\"\\n},\\n\\"widgets_values\\": [\\n\\"(worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, watermark\\",\\n\\"none\\",\\n\\"A1111\\"\\n]\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"KSampler //Inspire\\",\\n\\"pos\\": [\\n1450,\\n110\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 382\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 44,\\n\\"label\\": \\"model\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 45,\\n\\"label\\": \\"positive\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 46,\\n\\"label\\": \\"negative\\",\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 48,\\n\\"label\\": \\"latent_image\\",\\n\\"slot_index\\": 3\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n47\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler //Inspire\\"\\n},\\n\\"widgets_values\\": [\\n1119808910974861,\\n\\"randomize\\",\\n20,\\n8,\\n\\"dpmpp_2m\\",\\n\\"karras\\",\\n1,\\n\\"GPU(=A1111)\\",\\n\\"incremental\\",\\n0,\\n0,\\n\\"linear\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n31,\\n17,\\n0,\\n16,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n32,\\n8,\\n0,\\n17,\\n1,\\n\\"VAE\\"\\n],\\n[\\n42,\\n1,\\n1,\\n27,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n43,\\n1,\\n1,\\n28,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n44,\\n1,\\n0,\\n26,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n45,\\n27,\\n0,\\n26,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n46,\\n28,\\n0,\\n26,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n47,\\n26,\\n0,\\n17,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n48,\\n6,\\n0,\\n26,\\n3,\\n\\"LATENT\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n],\\n\\"ds\\": {\\n\\"scale\\": 1,\\n\\"offset\\": {\\n\\"0\\": -385.9446679955918,\\n\\"1\\": 125.7938046390797\\n}\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/像WebUI一样进行生成！.json","value":{"title":"像WebUI一样进行生成！.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/像WebUI一样进行生成！.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,I as data};

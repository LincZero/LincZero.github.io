import{_ as e,c as t,b as o,o as a,r as s}from"./app-Dwsnbiv5.js";const l={};function i(p,d){const n=s("VueFlow");return a(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 31,
  "last_link_id": 89,
  "nodes": [
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 432,
        "1": 158
      },
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 88,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            4
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "(girl) blue eyes, blonde hair, in the yosemite national park mountains nature\\n"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 434,
        "1": 371
      },
      "size": {
        "0": 425.27801513671875,
        "1": 180.6060791015625
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 89,
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
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "watermark, text\\n"
      ]
    },
    {
      "id": 26,
      "type": "VAEEncodeForInpaint",
      "pos": {
        "0": 503,
        "1": 669
      },
      "size": {
        "0": 210,
        "1": 98
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 73,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 86,
          "label": "VAE"
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 79,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            72
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncodeForInpaint"
      },
      "widgets_values": [
        6
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1422,
        "1": 387
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 42,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 85,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            22
          ],
          "slot_index": 0,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 20,
      "type": "LoadImage",
      "pos": {
        "0": 49,
        "1": 679
      },
      "size": {
        "0": 333,
        "1": 339
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            73
          ],
          "slot_index": 0,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            79
          ],
          "slot_index": 1,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "yosemite_inpaint_example.png",
        "image"
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1709,
        "1": 356
      },
      "size": {
        "0": 394,
        "1": 387
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 22,
          "label": "图像"
        }
      ],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 30,
      "type": "VAELoader",
      "pos": {
        "0": 23,
        "1": 487
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            85,
            86
          ],
          "slot_index": 0
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
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 940,
        "1": 180
      },
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 80,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 4,
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
          "link": 72,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            42
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        171829914789776,
        "randomize",
        20,
        8,
        "uni_pc_bh2",
        "normal",
        1
      ]
    },
    {
      "id": 29,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": -371,
        "1": 251
      },
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            80
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            87
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "Anything-V3.0.ckpt"
      ]
    },
    {
      "id": 31,
      "type": "CLIPSetLastLayer",
      "pos": {
        "0": 14,
        "1": 340
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 87,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            88,
            89
          ],
          "slot_index": 0,
          "label": "CLIP"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPSetLastLayer"
      },
      "widgets_values": [
        -2
      ]
    }
  ],
  "links": [
    [
      4,
      6,
      0,
      3,
      1,
      "CONDITIONING"
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
      22,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      42,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      72,
      26,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      73,
      20,
      0,
      26,
      0,
      "IMAGE"
    ],
    [
      79,
      20,
      1,
      26,
      2,
      "MASK"
    ],
    [
      80,
      29,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      85,
      30,
      0,
      8,
      1,
      "VAE"
    ],
    [
      86,
      30,
      0,
      26,
      1,
      "VAE"
    ],
    [
      87,
      29,
      1,
      31,
      0,
      "CLIP"
    ],
    [
      88,
      31,
      0,
      6,
      0,
      "CLIP"
    ],
    [
      89,
      31,
      0,
      7,
      0,
      "CLIP"
    ]
  ],
  "groups": [
    {
      "title": "Load image and alpha mask for inpainting",
      "bounding": [
        -20,
        607,
        788,
        454
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    }
  ],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.9849732675807633,
      "offset": [
        284.2721369485341,
        36.00902976378898
      ]
    }
  },
  "version": 0.4
}
`})])}const m=e(l,[["render",i],["__file","局部重绘3_动画.json.html.vue"]]),I=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%983_%E5%8A%A8%E7%94%BB.json.html","title":"局部重绘3_动画.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 31, \\"last_link_id\\": 89, \\"nodes\\": [ { \\"id\\": 6, \\"type\\": \\"CLIPTextEncode\\", \\"pos\\": { \\"0\\": 432, \\"1\\": 158 }, \\"size\\": { \\"0\\": 422.84503173828125, \\"1\\": 164.313049316406...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%983_%E5%8A%A8%E7%94%BB.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 31, \\"last_link_id\\": 89, \\"nodes\\": [ { \\"id\\": 6, \\"type\\": \\"CLIPTextEncode\\", \\"pos\\": { \\"0\\": 432, \\"1\\": 158 }, \\"size\\": { \\"0\\": 422.84503173828125, \\"1\\": 164.313049316406..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":2.24,"words":672},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/局部重绘3_动画.json","excerpt":"<p>{\\n\\"last_node_id\\": 31,\\n\\"last_link_id\\": 89,\\n\\"nodes\\": [\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 432,\\n\\"1\\": 158\\n},\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 88,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"(girl) blue eyes, blonde hair, in the yosemite national park mountains nature\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 434,\\n\\"1\\": 371\\n},\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 89,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"watermark, text\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"VAEEncodeForInpaint\\",\\n\\"pos\\": {\\n\\"0\\": 503,\\n\\"1\\": 669\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 73,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 86,\\n\\"label\\": \\"VAE\\"\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 79,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n72\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncodeForInpaint\\"\\n},\\n\\"widgets_values\\": [\\n6\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1422,\\n\\"1\\": 387\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 42,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 85,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n22\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": {\\n\\"0\\": 49,\\n\\"1\\": 679\\n},\\n\\"size\\": {\\n\\"0\\": 333,\\n\\"1\\": 339\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n73\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n79\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"yosemite_inpaint_example.png\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1709,\\n\\"1\\": 356\\n},\\n\\"size\\": {\\n\\"0\\": 394,\\n\\"1\\": 387\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 22,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 30,\\n\\"type\\": \\"VAELoader\\",\\n\\"pos\\": {\\n\\"0\\": 23,\\n\\"1\\": 487\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n85,\\n86\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"vae-ft-mse-840000-ema-pruned.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 940,\\n\\"1\\": 180\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 80,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 72,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n42\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n171829914789776,\\n\\"randomize\\",\\n20,\\n8,\\n\\"uni_pc_bh2\\",\\n\\"normal\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": -371,\\n\\"1\\": 251\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n80\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n87\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"Anything-V3.0.ckpt\\"\\n]\\n},\\n{\\n\\"id\\": 31,\\n\\"type\\": \\"CLIPSetLastLayer\\",\\n\\"pos\\": {\\n\\"0\\": 14,\\n\\"1\\": 340\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 87,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n88,\\n89\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPSetLastLayer\\"\\n},\\n\\"widgets_values\\": [\\n-2\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n22,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n42,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n72,\\n26,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n73,\\n20,\\n0,\\n26,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n79,\\n20,\\n1,\\n26,\\n2,\\n\\"MASK\\"\\n],\\n[\\n80,\\n29,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n85,\\n30,\\n0,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n86,\\n30,\\n0,\\n26,\\n1,\\n\\"VAE\\"\\n],\\n[\\n87,\\n29,\\n1,\\n31,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n88,\\n31,\\n0,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n89,\\n31,\\n0,\\n7,\\n0,\\n\\"CLIP\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Load image and alpha mask for inpainting\\",\\n\\"bounding\\": [\\n-20,\\n607,\\n788,\\n454\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.9849732675807633,\\n\\"offset\\": [\\n284.2721369485341,\\n36.00902976378898\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/局部重绘3_动画.json","value":{"title":"局部重绘3_动画.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/局部重绘3_动画.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,I as data};

import{_ as e,c as t,e as a,o,r as l}from"./app-CdytOEkI.js";const i={};function s(p,d){const n=l("VueFlow");return o(),t("div",null,[a(n,{type:"comfyui",data:`{
  "last_node_id": 30,
  "last_link_id": 87,
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
      "order": 2,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 81,
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
        "outdoors in the yosemite national park mountains nature\\n\\n\\n\\n"
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
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 82,
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
      "order": 7,
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
          "link": 83,
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
      "order": 6,
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
        152545289528694,
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
        "0": 17,
        "1": 303
      },
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 0,
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
            81,
            82
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            83,
            84
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "512-inpainting-ema.safetensors"
      ]
    },
    {
      "id": 20,
      "type": "LoadImage",
      "pos": {
        "0": -107,
        "1": 726
      },
      "size": {
        "0": 344,
        "1": 346
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            85
          ],
          "slot_index": 0,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [],
          "slot_index": 1,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "yosemite_outpaint_example.png",
        "image"
      ]
    },
    {
      "id": 30,
      "type": "ImagePadForOutpaint",
      "pos": {
        "0": 269,
        "1": 727
      },
      "size": {
        "0": 315,
        "1": 174
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 85,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            87
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            86
          ],
          "slot_index": 1,
          "shape": 3,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "ImagePadForOutpaint"
      },
      "widgets_values": [
        0,
        128,
        0,
        128,
        40
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1671,
        "1": 384
      },
      "size": {
        "0": 360.5482177734375,
        "1": 441.5260314941406
      },
      "flags": {},
      "order": 8,
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
      "id": 26,
      "type": "VAEEncodeForInpaint",
      "pos": {
        "0": 617,
        "1": 720
      },
      "size": {
        "0": 226.8000030517578,
        "1": 98
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 87,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 84,
          "label": "VAE"
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 86,
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
        8
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
      80,
      29,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      81,
      29,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      82,
      29,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      83,
      29,
      2,
      8,
      1,
      "VAE"
    ],
    [
      84,
      29,
      2,
      26,
      1,
      "VAE"
    ],
    [
      85,
      20,
      0,
      30,
      0,
      "IMAGE"
    ],
    [
      86,
      30,
      1,
      26,
      2,
      "MASK"
    ],
    [
      87,
      30,
      0,
      26,
      0,
      "IMAGE"
    ]
  ],
  "groups": [
    {
      "title": "Load image and pad for outpainting",
      "bounding": [
        -127,
        595,
        1038,
        509
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
`})])}const m=e(i,[["render",s],["__file","局部重绘4_外绘.json.html.vue"]]),I=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%984_%E5%A4%96%E7%BB%98.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 30, \\"last_link_id\\": 87, \\"nodes\\": [ { \\"id\\": 6, \\"type\\": \\"CLIPTextEncode\\", \\"pos\\": { \\"0\\": 432, \\"1\\": 158 }, \\"size\\": { \\"0\\": 422.84503173828125, \\"1\\": 164.313049316406...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%984_%E5%A4%96%E7%BB%98.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 30, \\"last_link_id\\": 87, \\"nodes\\": [ { \\"id\\": 6, \\"type\\": \\"CLIPTextEncode\\", \\"pos\\": { \\"0\\": 432, \\"1\\": 158 }, \\"size\\": { \\"0\\": 422.84503173828125, \\"1\\": 164.313049316406..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/局部重绘4_外绘.json","excerpt":"<p>{\\n\\"last_node_id\\": 30,\\n\\"last_link_id\\": 87,\\n\\"nodes\\": [\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 432,\\n\\"1\\": 158\\n},\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 81,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"outdoors in the yosemite national park mountains nature\\\\n\\\\n\\\\n\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 434,\\n\\"1\\": 371\\n},\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 82,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"watermark, text\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1422,\\n\\"1\\": 387\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 42,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 83,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n22\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 940,\\n\\"1\\": 180\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 80,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 72,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n42\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n152545289528694,\\n\\"randomize\\",\\n20,\\n8,\\n\\"uni_pc_bh2\\",\\n\\"normal\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": 17,\\n\\"1\\": 303\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n80\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n81,\\n82\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n83,\\n84\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"512-inpainting-ema.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": {\\n\\"0\\": -107,\\n\\"1\\": 726\\n},\\n\\"size\\": {\\n\\"0\\": 344,\\n\\"1\\": 346\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n85\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"yosemite_outpaint_example.png\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 30,\\n\\"type\\": \\"ImagePadForOutpaint\\",\\n\\"pos\\": {\\n\\"0\\": 269,\\n\\"1\\": 727\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 174\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 85,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n87\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n86\\n],\\n\\"slot_index\\": 1,\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImagePadForOutpaint\\"\\n},\\n\\"widgets_values\\": [\\n0,\\n128,\\n0,\\n128,\\n40\\n]\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1671,\\n\\"1\\": 384\\n},\\n\\"size\\": {\\n\\"0\\": 360.5482177734375,\\n\\"1\\": 441.5260314941406\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 22,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"VAEEncodeForInpaint\\",\\n\\"pos\\": {\\n\\"0\\": 617,\\n\\"1\\": 720\\n},\\n\\"size\\": {\\n\\"0\\": 226.8000030517578,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 87,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 84,\\n\\"label\\": \\"VAE\\"\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 86,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n72\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncodeForInpaint\\"\\n},\\n\\"widgets_values\\": [\\n8\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n22,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n42,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n72,\\n26,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n80,\\n29,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n81,\\n29,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n82,\\n29,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n83,\\n29,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n84,\\n29,\\n2,\\n26,\\n1,\\n\\"VAE\\"\\n],\\n[\\n85,\\n20,\\n0,\\n30,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n86,\\n30,\\n1,\\n26,\\n2,\\n\\"MASK\\"\\n],\\n[\\n87,\\n30,\\n0,\\n26,\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Load image and pad for outpainting\\",\\n\\"bounding\\": [\\n-127,\\n595,\\n1038,\\n509\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.9849732675807633,\\n\\"offset\\": [\\n284.2721369485341,\\n36.00902976378898\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,I as data};

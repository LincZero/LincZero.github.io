import{_ as e,c as t,b as o,r as i,o as s}from"./app-Bp_sarf3.js";const a={};function p(d,l){const n=i("VueFlow");return s(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 22,
  "last_link_id": 40,
  "nodes": [
    {
      "id": 14,
      "type": "VideoLinearCFGGuidance",
      "pos": [
        1463.739995117188,
        366.55992248535165
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 23
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            39
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VideoLinearCFGGuidance"
      },
      "widgets_values": [
        1
      ]
    },
    {
      "id": 12,
      "type": "SVD_img2vid_Conditioning",
      "pos": [
        1463.739995117188,
        496.55992248535154
      ],
      "size": {
        "0": 315,
        "1": 218
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip_vision",
          "type": "CLIP_VISION",
          "link": 24
        },
        {
          "name": "init_image",
          "type": "IMAGE",
          "link": 35,
          "slot_index": 1
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 25
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            40
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            17
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "latent",
          "type": "LATENT",
          "links": [
            18
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "SVD_img2vid_Conditioning"
      },
      "widgets_values": [
        1024,
        576,
        25,
        127,
        6,
        0
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        1843.7399951171883,
        476.55992248535154
      ],
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 39
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 40
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 17
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 18
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
        237514639057514,
        "randomize",
        20,
        2.5,
        "euler",
        "karras",
        1
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        2183.73999511719,
        476.55992248535154
      ],
      "size": {
        "0": 210,
        "1": 46
      },
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
          "link": 26
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            10
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 21,
      "type": "PreviewImage",
      "pos": [
        1152.400012207032,
        656.4000274658205
      ],
      "size": {
        "0": 275.9453125,
        "1": 246
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 36
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 20,
      "type": "VAEDecode",
      "pos": [
        1172.400012207032,
        566.4000274658204
      ],
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
          "link": 33
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 34,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            35,
            36
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
      "id": 17,
      "type": "KSampler",
      "pos": [
        802.4000122070315,
        566.4000274658204
      ],
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
          "link": 28
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 30
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 32
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 37,
          "slot_index": 3
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            33
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        144698910769133,
        "randomize",
        15,
        8,
        "uni_pc_bh2",
        "normal",
        1
      ]
    },
    {
      "id": 18,
      "type": "CLIPTextEncode",
      "pos": [
        342.4000122070312,
        516.4000274658204
      ],
      "size": {
        "0": 390,
        "1": 130
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 29
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            30
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "photograph beautiful scenery nature mountains alps river rapids snow sky cumulus clouds"
      ]
    },
    {
      "id": 22,
      "type": "EmptyLatentImage",
      "pos": [
        422.4000122070312,
        866.4000274658204
      ],
      "size": {
        "0": 310,
        "1": 110
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            37
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        1024,
        576,
        1
      ]
    },
    {
      "id": 19,
      "type": "CLIPTextEncode",
      "pos": [
        342.4000122070312,
        696.4000274658205
      ],
      "size": {
        "0": 390,
        "1": 130
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 31
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            32
          ],
          "shape": 3,
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
      "id": 16,
      "type": "CheckpointLoaderSimple",
      "pos": [
        0,
        510
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
            28
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            29,
            31
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            34
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "sd_xl_1.0.safetensors"
      ]
    },
    {
      "id": 15,
      "type": "ImageOnlyCheckpointLoader",
      "pos": [
        1050,
        320
      ],
      "size": {
        "0": 369.6000061035156,
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
          "slot_index": 0
        },
        {
          "name": "CLIP_VISION",
          "type": "CLIP_VISION",
          "links": [
            24
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            25,
            26
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "ImageOnlyCheckpointLoader"
      },
      "widgets_values": [
        "svd_xt.safetensors"
      ]
    },
    {
      "id": 10,
      "type": "SaveAnimatedWEBP",
      "pos": [
        1654,
        829
      ],
      "size": {
        "0": 741.6685791015625,
        "1": 564.5909423828125
      },
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
        "Node name for S&R": "SaveAnimatedWEBP"
      },
      "widgets_values": [
        "ComfyUI",
        10,
        false,
        85,
        "default"
      ]
    }
  ],
  "links": [
    [
      7,
      3,
      0,
      8,
      0,
      "LATENT"
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
      17,
      12,
      1,
      3,
      2,
      "CONDITIONING"
    ],
    [
      18,
      12,
      2,
      3,
      3,
      "LATENT"
    ],
    [
      23,
      15,
      0,
      14,
      0,
      "MODEL"
    ],
    [
      24,
      15,
      1,
      12,
      0,
      "CLIP_VISION"
    ],
    [
      25,
      15,
      2,
      12,
      2,
      "VAE"
    ],
    [
      26,
      15,
      2,
      8,
      1,
      "VAE"
    ],
    [
      28,
      16,
      0,
      17,
      0,
      "MODEL"
    ],
    [
      29,
      16,
      1,
      18,
      0,
      "CLIP"
    ],
    [
      30,
      18,
      0,
      17,
      1,
      "CONDITIONING"
    ],
    [
      31,
      16,
      1,
      19,
      0,
      "CLIP"
    ],
    [
      32,
      19,
      0,
      17,
      2,
      "CONDITIONING"
    ],
    [
      33,
      17,
      0,
      20,
      0,
      "LATENT"
    ],
    [
      34,
      16,
      2,
      20,
      1,
      "VAE"
    ],
    [
      35,
      20,
      0,
      12,
      1,
      "IMAGE"
    ],
    [
      36,
      20,
      0,
      21,
      0,
      "IMAGE"
    ],
    [
      37,
      22,
      0,
      17,
      3,
      "LATENT"
    ],
    [
      39,
      14,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      40,
      12,
      0,
      3,
      1,
      "CONDITIONING"
    ]
  ],
  "groups": [
    {
      "title": "Image to Video",
      "bounding": [
        1454,
        293,
        954,
        478
      ],
      "color": "#8A8",
      "font_size": 24
    },
    {
      "title": "Text to Image",
      "bounding": [
        332,
        442,
        1106,
        544
      ],
      "color": "#3f789e",
      "font_size": 24
    }
  ],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const r=e(a,[["render",p],["__file","workflow_txt_to_img_to_video.json.html.vue"]]),_=JSON.parse('{"path":"/MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json.html","title":"workflow_txt_to_img_to_video.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 22, \\"last_link_id\\": 40, \\"nodes\\": [ { \\"id\\": 14, \\"type\\": \\"VideoLinearCFGGuidance\\", \\"pos\\": [ 1463.739995117188, 366.55992248535165 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 22, \\"last_link_id\\": 40, \\"nodes\\": [ { \\"id\\": 14, \\"type\\": \\"VideoLinearCFGGuidance\\", \\"pos\\": [ 1463.739995117188, 366.55992248535165 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":2.79,"words":836},"filePathRelative":"MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json","excerpt":"<p>{\\n\\"last_node_id\\": 22,\\n\\"last_link_id\\": 40,\\n\\"nodes\\": [\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"VideoLinearCFGGuidance\\",\\n\\"pos\\": [\\n1463.739995117188,\\n366.55992248535165\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 23\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n39\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VideoLinearCFGGuidance\\"\\n},\\n\\"widgets_values\\": [\\n1\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"SVD_img2vid_Conditioning\\",\\n\\"pos\\": [\\n1463.739995117188,\\n496.55992248535154\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 218\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip_vision\\",\\n\\"type\\": \\"CLIP_VISION\\",\\n\\"link\\": 24\\n},\\n{\\n\\"name\\": \\"init_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 35,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 25\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n40\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n17\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"latent\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n18\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SVD_img2vid_Conditioning\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n576,\\n25,\\n127,\\n6,\\n0\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n1843.7399951171883,\\n476.55992248535154\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 39\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 40\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 17\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 18\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n237514639057514,\\n\\"randomize\\",\\n20,\\n2.5,\\n\\"euler\\",\\n\\"karras\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n2183.73999511719,\\n476.55992248535154\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 26\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n10\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1152.400012207032,\\n656.4000274658205\\n],\\n\\"size\\": {\\n\\"0\\": 275.9453125,\\n\\"1\\": 246\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 36\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n1172.400012207032,\\n566.4000274658204\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 33\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 34,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n35,\\n36\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n802.4000122070315,\\n566.4000274658204\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 28\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 30\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 32\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 37,\\n\\"slot_index\\": 3\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n33\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n144698910769133,\\n\\"randomize\\",\\n15,\\n8,\\n\\"uni_pc_bh2\\",\\n\\"normal\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 18,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n342.4000122070312,\\n516.4000274658204\\n],\\n\\"size\\": {\\n\\"0\\": 390,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 29\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n30\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"photograph beautiful scenery nature mountains alps river rapids snow sky cumulus clouds\\"\\n]\\n},\\n{\\n\\"id\\": 22,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n422.4000122070312,\\n866.4000274658204\\n],\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n37\\n],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n576,\\n1\\n]\\n},\\n{\\n\\"id\\": 19,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n342.4000122070312,\\n696.4000274658205\\n],\\n\\"size\\": {\\n\\"0\\": 390,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 31\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n32\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"text, watermark\\"\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n0,\\n510\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n28\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n29,\\n31\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n34\\n],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"sd_xl_1.0.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"ImageOnlyCheckpointLoader\\",\\n\\"pos\\": [\\n1050,\\n320\\n],\\n\\"size\\": {\\n\\"0\\": 369.6000061035156,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n23\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP_VISION\\",\\n\\"type\\": \\"CLIP_VISION\\",\\n\\"links\\": [\\n24\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n25,\\n26\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageOnlyCheckpointLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"svd_xt.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"SaveAnimatedWEBP\\",\\n\\"pos\\": [\\n1654,\\n829\\n],\\n\\"size\\": {\\n\\"0\\": 741.6685791015625,\\n\\"1\\": 564.5909423828125\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 10\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveAnimatedWEBP\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\",\\n10,\\nfalse,\\n85,\\n\\"default\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n10,\\n8,\\n0,\\n10,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n17,\\n12,\\n1,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n18,\\n12,\\n2,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n23,\\n15,\\n0,\\n14,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n24,\\n15,\\n1,\\n12,\\n0,\\n\\"CLIP_VISION\\"\\n],\\n[\\n25,\\n15,\\n2,\\n12,\\n2,\\n\\"VAE\\"\\n],\\n[\\n26,\\n15,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n28,\\n16,\\n0,\\n17,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n29,\\n16,\\n1,\\n18,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n30,\\n18,\\n0,\\n17,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n31,\\n16,\\n1,\\n19,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n32,\\n19,\\n0,\\n17,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n33,\\n17,\\n0,\\n20,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n34,\\n16,\\n2,\\n20,\\n1,\\n\\"VAE\\"\\n],\\n[\\n35,\\n20,\\n0,\\n12,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n36,\\n20,\\n0,\\n21,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n37,\\n22,\\n0,\\n17,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n39,\\n14,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n40,\\n12,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Image to Video\\",\\n\\"bounding\\": [\\n1454,\\n293,\\n954,\\n478\\n],\\n\\"color\\": \\"#8A8\\",\\n\\"font_size\\": 24\\n},\\n{\\n\\"title\\": \\"Text to Image\\",\\n\\"bounding\\": [\\n332,\\n442,\\n1106,\\n544\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json","value":{"title":"workflow_txt_to_img_to_video.json","path":"MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{r as comp,_ as data};

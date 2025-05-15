import{_ as r,e,h as b,r as t,o}from"./app-DpI9FnpE.js";const i={};function s(a,p){const n=t("VueFlow");return o(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const l=r(i,[["render",s],["__file","workflow_txt_to_img_to_video.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json.html","title":"workflow_txt_to_img_to_video.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 22, \\"last_link_id\\": 40, \\"nodes\\": [ { \\"id\\": 14, \\"type\\": \\"VideoLinearCFGGuidance\\", \\"pos\\": [ 1463.739995117188, 366.55992248535165 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 22, \\"last_link_id\\": 40, \\"nodes\\": [ { \\"id\\": 14, \\"type\\": \\"VideoLinearCFGGuidance\\", \\"pos\\": [ 1463.739995117188, 366.55992248535165 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.79,"words":836},"filePathRelative":"MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 22,<br>\\n\\"last_link_id\\": 40,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"VideoLinearCFGGuidance\\",<br>\\n\\"pos\\": [<br>\\n1463.739995117188,<br>\\n366.55992248535165<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 23<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n39<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VideoLinearCFGGuidance\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"SVD_img2vid_Conditioning\\",<br>\\n\\"pos\\": [<br>\\n1463.739995117188,<br>\\n496.55992248535154<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 218<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip_vision\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"link\\": 24<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"init_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 35,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 25<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n40<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n17<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n18<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SVD_img2vid_Conditioning\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n576,<br>\\n25,<br>\\n127,<br>\\n6,<br>\\n0<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n1843.7399951171883,<br>\\n476.55992248535154<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 262<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 39<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 40<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 17<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 18<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n237514639057514,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n2.5,<br>\\n\\"euler\\",<br>\\n\\"karras\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n2183.73999511719,<br>\\n476.55992248535154<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 7<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 26<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n10<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 21,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1152.400012207032,<br>\\n656.4000274658205<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 275.9453125,<br>\\n\\"1\\": 246<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 36<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 20,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n1172.400012207032,<br>\\n566.4000274658204<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 33<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 34,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n35,<br>\\n36<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 17,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n802.4000122070315,<br>\\n566.4000274658204<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 262<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 28<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 30<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 32<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 37,<br>\\n\\"slot_index\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n33<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n144698910769133,<br>\\n\\"randomize\\",<br>\\n15,<br>\\n8,<br>\\n\\"uni_pc_bh2\\",<br>\\n\\"normal\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 18,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n342.4000122070312,<br>\\n516.4000274658204<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 390,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 29<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n30<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"photograph beautiful scenery nature mountains alps river rapids snow sky cumulus clouds\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 22,<br>\\n\\"type\\": \\"EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n422.4000122070312,<br>\\n866.4000274658204<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n37<br>\\n],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n576,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 19,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n342.4000122070312,<br>\\n696.4000274658205<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 390,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 31<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n32<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"text, watermark\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n0,<br>\\n510<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n28<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n29,<br>\\n31<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n34<br>\\n],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"sd_xl_1.0.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 15,<br>\\n\\"type\\": \\"ImageOnlyCheckpointLoader\\",<br>\\n\\"pos\\": [<br>\\n1050,<br>\\n320<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 369.6000061035156,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n23<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP_VISION\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"links\\": [<br>\\n24<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n25,<br>\\n26<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageOnlyCheckpointLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"svd_xt.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 10,<br>\\n\\"type\\": \\"SaveAnimatedWEBP\\",<br>\\n\\"pos\\": [<br>\\n1654,<br>\\n829<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 741.6685791015625,<br>\\n\\"1\\": 564.5909423828125<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 10<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveAnimatedWEBP\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\",<br>\\n10,<br>\\nfalse,<br>\\n85,<br>\\n\\"default\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n10,<br>\\n8,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n17,<br>\\n12,<br>\\n1,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n18,<br>\\n12,<br>\\n2,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n23,<br>\\n15,<br>\\n0,<br>\\n14,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n24,<br>\\n15,<br>\\n1,<br>\\n12,<br>\\n0,<br>\\n\\"CLIP_VISION\\"<br>\\n],<br>\\n[<br>\\n25,<br>\\n15,<br>\\n2,<br>\\n12,<br>\\n2,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n26,<br>\\n15,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n28,<br>\\n16,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n29,<br>\\n16,<br>\\n1,<br>\\n18,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n30,<br>\\n18,<br>\\n0,<br>\\n17,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n31,<br>\\n16,<br>\\n1,<br>\\n19,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n32,<br>\\n19,<br>\\n0,<br>\\n17,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n33,<br>\\n17,<br>\\n0,<br>\\n20,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n34,<br>\\n16,<br>\\n2,<br>\\n20,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n35,<br>\\n20,<br>\\n0,<br>\\n12,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n36,<br>\\n20,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n37,<br>\\n22,<br>\\n0,<br>\\n17,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n39,<br>\\n14,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n40,<br>\\n12,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [<br>\\n{<br>\\n\\"title\\": \\"Image to Video\\",<br>\\n\\"bounding\\": [<br>\\n1454,<br>\\n293,<br>\\n954,<br>\\n478<br>\\n],<br>\\n\\"color\\": \\"#8A8\\",<br>\\n\\"font_size\\": 24<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"Text to Image\\",<br>\\n\\"bounding\\": [<br>\\n332,<br>\\n442,<br>\\n1106,<br>\\n544<br>\\n],<br>\\n\\"color\\": \\"#3f789e\\",<br>\\n\\"font_size\\": 24<br>\\n}<br>\\n],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json","value":{"title":"workflow_txt_to_img_to_video.json","path":"MdNote_Other/ComfyUI_examples/video/workflow_txt_to_img_to_video.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{l as comp,m as data};

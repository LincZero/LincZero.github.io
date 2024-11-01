import{_ as e,c as o,a as s,o as i,r as t}from"./app-DyeLIyox.js";const a={};function p(m,l){const n=t("VueFlow");return i(),o("div",null,[s(n,{type:"comfyui",data:`{
  "last_node_id": 25,
  "last_link_id": 45,
  "nodes": [
    {
      "id": 12,
      "type": "[Comfy3D] Load Convolutional Reconstruction Model",
      "pos": [
        1460,
        860
      ],
      "size": {
        "0": 327.6000061035156,
        "1": 58
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "crm_model",
          "type": "CRM_MODEL",
          "links": [
            17
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "[Comfy3D] Load Convolutional Reconstruction Model"
      },
      "widgets_values": [
        "CRM.pth"
      ]
    },
    {
      "id": 21,
      "type": "[Comfy3D] Switch Mesh Axis",
      "pos": [
        1460,
        1090
      ],
      "size": {
        "0": 330,
        "1": 130
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "mesh",
          "type": "MESH",
          "link": 29
        }
      ],
      "outputs": [
        {
          "name": "switched_mesh",
          "type": "MESH",
          "links": [
            30
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "[Comfy3D] Switch Mesh Axis"
      },
      "widgets_values": [
        "-x",
        "+y",
        "-z",
        false
      ]
    },
    {
      "id": 2,
      "type": "[Comfy3D] Load CRM MVDiffusion Model",
      "pos": [
        510,
        860
      ],
      "size": {
        "0": 470,
        "1": 82
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "crm_mvdiffusion_sampler",
          "type": "CRM_MVDIFFUSION_SAMPLER",
          "links": [
            1
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "[Comfy3D] Load CRM MVDiffusion Model"
      },
      "widgets_values": [
        "pixel-diffusion.pth",
        "configs/crm_configs/sd_v2_base_ipmv_zero_SNR.yaml"
      ]
    },
    {
      "id": 8,
      "type": "[Comfy3D] Convolutional Reconstruction Model",
      "pos": [
        1460,
        970
      ],
      "size": {
        "0": 330,
        "1": 70
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "crm_model",
          "type": "CRM_MODEL",
          "link": 17
        },
        {
          "name": "multiview_images",
          "type": "IMAGE",
          "link": 39
        },
        {
          "name": "multiview_CCMs",
          "type": "IMAGE",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "mesh",
          "type": "MESH",
          "links": [
            29
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "[Comfy3D] Convolutional Reconstruction Model"
      }
    },
    {
      "id": 5,
      "type": "[Comfy3D] Load CRM MVDiffusion Model",
      "pos": [
        1000,
        860
      ],
      "size": {
        "0": 440,
        "1": 82
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "crm_mvdiffusion_sampler",
          "type": "CRM_MVDIFFUSION_SAMPLER",
          "links": [
            4
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "[Comfy3D] Load CRM MVDiffusion Model"
      },
      "widgets_values": [
        "ccm-diffusion.pth",
        "configs/crm_configs/sd_v2_base_ipmv_chin8_zero_snr.yaml"
      ]
    },
    {
      "id": 4,
      "type": "[Comfy3D] CRM CCMs MVDiffusion Model",
      "pos": [
        1000,
        990
      ],
      "size": {
        "0": 440,
        "1": 340
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "crm_mvdiffusion_sampler",
          "type": "CRM_MVDIFFUSION_SAMPLER",
          "link": 4
        },
        {
          "name": "reference_image",
          "type": "IMAGE",
          "link": 44
        },
        {
          "name": "reference_mask",
          "type": "MASK",
          "link": 37
        },
        {
          "name": "multiview_images",
          "type": "IMAGE",
          "link": 5
        }
      ],
      "outputs": [
        {
          "name": "multiview_CCMs",
          "type": "IMAGE",
          "links": [
            10,
            21
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "[Comfy3D] CRM CCMs MVDiffusion Model"
      },
      "widgets_values": [
        "3D assets",
        "uniform low no texture ugly, boring, bad anatomy, blurry, pixelated,  obscure, unnatural colors, poor lighting, dull, and unclear.",
        1234,
        "fixed",
        5.5,
        50
      ]
    },
    {
      "id": 3,
      "type": "[Comfy3D] CRM Images MVDiffusion Model",
      "pos": [
        510,
        990
      ],
      "size": {
        "0": 470,
        "1": 340
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "crm_mvdiffusion_sampler",
          "type": "CRM_MVDIFFUSION_SAMPLER",
          "link": 1
        },
        {
          "name": "reference_image",
          "type": "IMAGE",
          "link": 45
        },
        {
          "name": "reference_mask",
          "type": "MASK",
          "link": 34
        }
      ],
      "outputs": [
        {
          "name": "multiview_images",
          "type": "IMAGE",
          "links": [
            5,
            20,
            39
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "[Comfy3D] CRM Images MVDiffusion Model"
      },
      "widgets_values": [
        "3D assets",
        "uniform low no texture ugly, boring, bad anatomy, blurry, pixelated,  obscure, unnatural colors, poor lighting, dull, and unclear.",
        885849331451775,
        "randomize",
        5.5,
        50
      ]
    },
    {
      "id": 22,
      "type": "BRIA_RMBG_ModelLoader_Zho",
      "pos": [
        -100,
        860
      ],
      "size": [
        230,
        50
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "rmbgmodel",
          "type": "RMBGMODEL",
          "links": [
            31
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "BRIA_RMBG_ModelLoader_Zho"
      }
    },
    {
      "id": 23,
      "type": "BRIA_RMBG_Zho",
      "pos": [
        150,
        860
      ],
      "size": [
        140,
        50
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "rmbgmodel",
          "type": "RMBGMODEL",
          "link": 31
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 32,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "links": [
            43
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "mask",
          "type": "MASK",
          "links": [
            34,
            37
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "BRIA_RMBG_Zho"
      }
    },
    {
      "id": 25,
      "type": "SplitImageWithAlpha",
      "pos": [
        310,
        860
      ],
      "size": [
        180,
        50
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 43,
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            44,
            45
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "SplitImageWithAlpha"
      }
    },
    {
      "id": 14,
      "type": "[Comfy3D] Save 3D Mesh",
      "pos": [
        1460,
        1270
      ],
      "size": {
        "0": 330,
        "1": 60
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "mesh",
          "type": "MESH",
          "link": 30
        }
      ],
      "outputs": [
        {
          "name": "save_path",
          "type": "STRING",
          "links": [
            19
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "[Comfy3D] Save 3D Mesh"
      },
      "widgets_values": [
        "CRMTest/mesh.obj"
      ]
    },
    {
      "id": 13,
      "type": "[Comfy3D] Preview 3DMesh",
      "pos": [
        510,
        1380
      ],
      "size": [
        1280,
        1180
      ],
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "mesh_file_path",
          "type": "STRING",
          "link": 19,
          "widget": {
            "name": "mesh_file_path"
          }
        }
      ],
      "properties": {
        "Node name for S&R": "[Comfy3D] Preview 3DMesh"
      },
      "widgets_values": [
        "",
        null
      ]
    },
    {
      "id": 16,
      "type": "PreviewImage",
      "pos": [
        -100,
        2140
      ],
      "size": {
        "0": 590,
        "1": 420
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 21
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 15,
      "type": "PreviewImage",
      "pos": [
        -100,
        1669
      ],
      "size": {
        "0": 590,
        "1": 420
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 20
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 1,
      "type": "LoadImage",
      "pos": [
        -100,
        960
      ],
      "size": {
        "0": 590,
        "1": 660
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            32
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "ComfyUI_temp_ajvfb_00082_.png",
        "image"
      ]
    }
  ],
  "links": [
    [
      1,
      2,
      0,
      3,
      0,
      "CRM_MVDIFFUSION_SAMPLER"
    ],
    [
      4,
      5,
      0,
      4,
      0,
      "CRM_MVDIFFUSION_SAMPLER"
    ],
    [
      5,
      3,
      0,
      4,
      3,
      "IMAGE"
    ],
    [
      10,
      4,
      0,
      8,
      2,
      "IMAGE"
    ],
    [
      17,
      12,
      0,
      8,
      0,
      "CRM_MODEL"
    ],
    [
      19,
      14,
      0,
      13,
      0,
      "STRING"
    ],
    [
      20,
      3,
      0,
      15,
      0,
      "IMAGE"
    ],
    [
      21,
      4,
      0,
      16,
      0,
      "IMAGE"
    ],
    [
      29,
      8,
      0,
      21,
      0,
      "MESH"
    ],
    [
      30,
      21,
      0,
      14,
      0,
      "MESH"
    ],
    [
      31,
      22,
      0,
      23,
      0,
      "RMBGMODEL"
    ],
    [
      32,
      1,
      0,
      23,
      1,
      "IMAGE"
    ],
    [
      34,
      23,
      1,
      3,
      2,
      "MASK"
    ],
    [
      37,
      23,
      1,
      4,
      2,
      "MASK"
    ],
    [
      39,
      3,
      0,
      8,
      1,
      "IMAGE"
    ],
    [
      43,
      23,
      0,
      25,
      0,
      "IMAGE"
    ],
    [
      44,
      25,
      0,
      4,
      1,
      "IMAGE"
    ],
    [
      45,
      25,
      0,
      3,
      1,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const d=e(a,[["render",p],["__file","CRM Comfy 3D【Zho】.json.html.vue"]]),M=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/CRM%20Comfy%203D%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 25, \\"last_link_id\\": 45, \\"nodes\\": [ { \\"id\\": 12, \\"type\\": \\"[Comfy3D] Load Convolutional Reconstruction Model\\", \\"pos\\": [ 1460, 860 ], \\"size\\": { \\"0\\": 327.6000061035...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Other/ComfyUI-Workflows-ZHO/CRM%20Comfy%203D%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 25, \\"last_link_id\\": 45, \\"nodes\\": [ { \\"id\\": 12, \\"type\\": \\"[Comfy3D] Load Convolutional Reconstruction Model\\", \\"pos\\": [ 1460, 860 ], \\"size\\": { \\"0\\": 327.6000061035..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.98,"words":894},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/CRM Comfy 3D【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 25,\\n\\"last_link_id\\": 45,\\n\\"nodes\\": [\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"[Comfy3D] Load Convolutional Reconstruction Model\\",\\n\\"pos\\": [\\n1460,\\n860\\n],\\n\\"size\\": {\\n\\"0\\": 327.6000061035156,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"crm_model\\",\\n\\"type\\": \\"CRM_MODEL\\",\\n\\"links\\": [\\n17\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Load Convolutional Reconstruction Model\\"\\n},\\n\\"widgets_values\\": [\\n\\"CRM.pth\\"\\n]\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"[Comfy3D] Switch Mesh Axis\\",\\n\\"pos\\": [\\n1460,\\n1090\\n],\\n\\"size\\": {\\n\\"0\\": 330,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mesh\\",\\n\\"type\\": \\"MESH\\",\\n\\"link\\": 29\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"switched_mesh\\",\\n\\"type\\": \\"MESH\\",\\n\\"links\\": [\\n30\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Switch Mesh Axis\\"\\n},\\n\\"widgets_values\\": [\\n\\"-x\\",\\n\\"+y\\",\\n\\"-z\\",\\nfalse\\n]\\n},\\n{\\n\\"id\\": 2,\\n\\"type\\": \\"[Comfy3D] Load CRM MVDiffusion Model\\",\\n\\"pos\\": [\\n510,\\n860\\n],\\n\\"size\\": {\\n\\"0\\": 470,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"crm_mvdiffusion_sampler\\",\\n\\"type\\": \\"CRM_MVDIFFUSION_SAMPLER\\",\\n\\"links\\": [\\n1\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Load CRM MVDiffusion Model\\"\\n},\\n\\"widgets_values\\": [\\n\\"pixel-diffusion.pth\\",\\n\\"configs/crm_configs/sd_v2_base_ipmv_zero_SNR.yaml\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"[Comfy3D] Convolutional Reconstruction Model\\",\\n\\"pos\\": [\\n1460,\\n970\\n],\\n\\"size\\": {\\n\\"0\\": 330,\\n\\"1\\": 70\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"crm_model\\",\\n\\"type\\": \\"CRM_MODEL\\",\\n\\"link\\": 17\\n},\\n{\\n\\"name\\": \\"multiview_images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 39\\n},\\n{\\n\\"name\\": \\"multiview_CCMs\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 10\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"mesh\\",\\n\\"type\\": \\"MESH\\",\\n\\"links\\": [\\n29\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Convolutional Reconstruction Model\\"\\n}\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"[Comfy3D] Load CRM MVDiffusion Model\\",\\n\\"pos\\": [\\n1000,\\n860\\n],\\n\\"size\\": {\\n\\"0\\": 440,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"crm_mvdiffusion_sampler\\",\\n\\"type\\": \\"CRM_MVDIFFUSION_SAMPLER\\",\\n\\"links\\": [\\n4\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Load CRM MVDiffusion Model\\"\\n},\\n\\"widgets_values\\": [\\n\\"ccm-diffusion.pth\\",\\n\\"configs/crm_configs/sd_v2_base_ipmv_chin8_zero_snr.yaml\\"\\n]\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"[Comfy3D] CRM CCMs MVDiffusion Model\\",\\n\\"pos\\": [\\n1000,\\n990\\n],\\n\\"size\\": {\\n\\"0\\": 440,\\n\\"1\\": 340\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"crm_mvdiffusion_sampler\\",\\n\\"type\\": \\"CRM_MVDIFFUSION_SAMPLER\\",\\n\\"link\\": 4\\n},\\n{\\n\\"name\\": \\"reference_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 44\\n},\\n{\\n\\"name\\": \\"reference_mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 37\\n},\\n{\\n\\"name\\": \\"multiview_images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 5\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"multiview_CCMs\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n10,\\n21\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] CRM CCMs MVDiffusion Model\\"\\n},\\n\\"widgets_values\\": [\\n\\"3D assets\\",\\n\\"uniform low no texture ugly, boring, bad anatomy, blurry, pixelated,  obscure, unnatural colors, poor lighting, dull, and unclear.\\",\\n1234,\\n\\"fixed\\",\\n5.5,\\n50\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"[Comfy3D] CRM Images MVDiffusion Model\\",\\n\\"pos\\": [\\n510,\\n990\\n],\\n\\"size\\": {\\n\\"0\\": 470,\\n\\"1\\": 340\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"crm_mvdiffusion_sampler\\",\\n\\"type\\": \\"CRM_MVDIFFUSION_SAMPLER\\",\\n\\"link\\": 1\\n},\\n{\\n\\"name\\": \\"reference_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 45\\n},\\n{\\n\\"name\\": \\"reference_mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 34\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"multiview_images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n5,\\n20,\\n39\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] CRM Images MVDiffusion Model\\"\\n},\\n\\"widgets_values\\": [\\n\\"3D assets\\",\\n\\"uniform low no texture ugly, boring, bad anatomy, blurry, pixelated,  obscure, unnatural colors, poor lighting, dull, and unclear.\\",\\n885849331451775,\\n\\"randomize\\",\\n5.5,\\n50\\n]\\n},\\n{\\n\\"id\\": 22,\\n\\"type\\": \\"BRIA_RMBG_ModelLoader_Zho\\",\\n\\"pos\\": [\\n-100,\\n860\\n],\\n\\"size\\": [\\n230,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"rmbgmodel\\",\\n\\"type\\": \\"RMBGMODEL\\",\\n\\"links\\": [\\n31\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BRIA_RMBG_ModelLoader_Zho\\"\\n}\\n},\\n{\\n\\"id\\": 23,\\n\\"type\\": \\"BRIA_RMBG_Zho\\",\\n\\"pos\\": [\\n150,\\n860\\n],\\n\\"size\\": [\\n140,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"rmbgmodel\\",\\n\\"type\\": \\"RMBGMODEL\\",\\n\\"link\\": 31\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 32,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n43\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n34,\\n37\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BRIA_RMBG_Zho\\"\\n}\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"SplitImageWithAlpha\\",\\n\\"pos\\": [\\n310,\\n860\\n],\\n\\"size\\": [\\n180,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 43,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n44,\\n45\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SplitImageWithAlpha\\"\\n}\\n},\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"[Comfy3D] Save 3D Mesh\\",\\n\\"pos\\": [\\n1460,\\n1270\\n],\\n\\"size\\": {\\n\\"0\\": 330,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mesh\\",\\n\\"type\\": \\"MESH\\",\\n\\"link\\": 30\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"save_path\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n19\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Save 3D Mesh\\"\\n},\\n\\"widgets_values\\": [\\n\\"CRMTest/mesh.obj\\"\\n]\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"[Comfy3D] Preview 3DMesh\\",\\n\\"pos\\": [\\n510,\\n1380\\n],\\n\\"size\\": [\\n1280,\\n1180\\n],\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mesh_file_path\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 19,\\n\\"widget\\": {\\n\\"name\\": \\"mesh_file_path\\"\\n}\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Preview 3DMesh\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\",\\nnull\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n-100,\\n2140\\n],\\n\\"size\\": {\\n\\"0\\": 590,\\n\\"1\\": 420\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 21\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n-100,\\n1669\\n],\\n\\"size\\": {\\n\\"0\\": 590,\\n\\"1\\": 420\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 20\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 1,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n-100,\\n960\\n],\\n\\"size\\": {\\n\\"0\\": 590,\\n\\"1\\": 660\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n32\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI_temp_ajvfb_00082_.png\\",\\n\\"image\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n1,\\n2,\\n0,\\n3,\\n0,\\n\\"CRM_MVDIFFUSION_SAMPLER\\"\\n],\\n[\\n4,\\n5,\\n0,\\n4,\\n0,\\n\\"CRM_MVDIFFUSION_SAMPLER\\"\\n],\\n[\\n5,\\n3,\\n0,\\n4,\\n3,\\n\\"IMAGE\\"\\n],\\n[\\n10,\\n4,\\n0,\\n8,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n17,\\n12,\\n0,\\n8,\\n0,\\n\\"CRM_MODEL\\"\\n],\\n[\\n19,\\n14,\\n0,\\n13,\\n0,\\n\\"STRING\\"\\n],\\n[\\n20,\\n3,\\n0,\\n15,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n21,\\n4,\\n0,\\n16,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n29,\\n8,\\n0,\\n21,\\n0,\\n\\"MESH\\"\\n],\\n[\\n30,\\n21,\\n0,\\n14,\\n0,\\n\\"MESH\\"\\n],\\n[\\n31,\\n22,\\n0,\\n23,\\n0,\\n\\"RMBGMODEL\\"\\n],\\n[\\n32,\\n1,\\n0,\\n23,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n34,\\n23,\\n1,\\n3,\\n2,\\n\\"MASK\\"\\n],\\n[\\n37,\\n23,\\n1,\\n4,\\n2,\\n\\"MASK\\"\\n],\\n[\\n39,\\n3,\\n0,\\n8,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n43,\\n23,\\n0,\\n25,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n44,\\n25,\\n0,\\n4,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n45,\\n25,\\n0,\\n3,\\n1,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{d as comp,M as data};

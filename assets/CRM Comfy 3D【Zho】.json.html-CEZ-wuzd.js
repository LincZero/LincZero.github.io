import{_ as r,e,h as b,r as o,o as s}from"./app-Bo4La9js.js";const i={};function t(a,p){const n=o("VueFlow");return s(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const l=r(i,[["render",t],["__file","CRM Comfy 3D【Zho】.json.html.vue"]]),d=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/CRM%20Comfy%203D%E3%80%90Zho%E3%80%91.json.html","title":"CRM Comfy 3D【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 25, \\"last_link_id\\": 45, \\"nodes\\": [ { \\"id\\": 12, \\"type\\": \\"[Comfy3D] Load Convolutional Reconstruction Model\\", \\"pos\\": [ 1460, 860 ], \\"size\\": { \\"0\\": 327.6000061035...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/CRM%20Comfy%203D%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 25, \\"last_link_id\\": 45, \\"nodes\\": [ { \\"id\\": 12, \\"type\\": \\"[Comfy3D] Load Convolutional Reconstruction Model\\", \\"pos\\": [ 1460, 860 ], \\"size\\": { \\"0\\": 327.6000061035..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.98,"words":894},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/CRM Comfy 3D【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 25,<br>\\n\\"last_link_id\\": 45,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"[Comfy3D] Load Convolutional Reconstruction Model\\",<br>\\n\\"pos\\": [<br>\\n1460,<br>\\n860<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 327.6000061035156,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"crm_model\\",<br>\\n\\"type\\": \\"CRM_MODEL\\",<br>\\n\\"links\\": [<br>\\n17<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Load Convolutional Reconstruction Model\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"CRM.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 21,<br>\\n\\"type\\": \\"[Comfy3D] Switch Mesh Axis\\",<br>\\n\\"pos\\": [<br>\\n1460,<br>\\n1090<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 330,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mesh\\",<br>\\n\\"type\\": \\"MESH\\",<br>\\n\\"link\\": 29<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"switched_mesh\\",<br>\\n\\"type\\": \\"MESH\\",<br>\\n\\"links\\": [<br>\\n30<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Switch Mesh Axis\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"-x\\",<br>\\n\\"+y\\",<br>\\n\\"-z\\",<br>\\nfalse<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 2,<br>\\n\\"type\\": \\"[Comfy3D] Load CRM MVDiffusion Model\\",<br>\\n\\"pos\\": [<br>\\n510,<br>\\n860<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 470,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"crm_mvdiffusion_sampler\\",<br>\\n\\"type\\": \\"CRM_MVDIFFUSION_SAMPLER\\",<br>\\n\\"links\\": [<br>\\n1<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Load CRM MVDiffusion Model\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"pixel-diffusion.pth\\",<br>\\n\\"configs/crm_configs/sd_v2_base_ipmv_zero_SNR.yaml\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"[Comfy3D] Convolutional Reconstruction Model\\",<br>\\n\\"pos\\": [<br>\\n1460,<br>\\n970<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 330,<br>\\n\\"1\\": 70<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"crm_model\\",<br>\\n\\"type\\": \\"CRM_MODEL\\",<br>\\n\\"link\\": 17<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"multiview_images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 39<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"multiview_CCMs\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 10<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mesh\\",<br>\\n\\"type\\": \\"MESH\\",<br>\\n\\"links\\": [<br>\\n29<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Convolutional Reconstruction Model\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"[Comfy3D] Load CRM MVDiffusion Model\\",<br>\\n\\"pos\\": [<br>\\n1000,<br>\\n860<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 440,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"crm_mvdiffusion_sampler\\",<br>\\n\\"type\\": \\"CRM_MVDIFFUSION_SAMPLER\\",<br>\\n\\"links\\": [<br>\\n4<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Load CRM MVDiffusion Model\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ccm-diffusion.pth\\",<br>\\n\\"configs/crm_configs/sd_v2_base_ipmv_chin8_zero_snr.yaml\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"[Comfy3D] CRM CCMs MVDiffusion Model\\",<br>\\n\\"pos\\": [<br>\\n1000,<br>\\n990<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 440,<br>\\n\\"1\\": 340<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"crm_mvdiffusion_sampler\\",<br>\\n\\"type\\": \\"CRM_MVDIFFUSION_SAMPLER\\",<br>\\n\\"link\\": 4<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"reference_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 44<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"reference_mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 37<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"multiview_images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 5<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"multiview_CCMs\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n10,<br>\\n21<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] CRM CCMs MVDiffusion Model\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"3D assets\\",<br>\\n\\"uniform low no texture ugly, boring, bad anatomy, blurry, pixelated,  obscure, unnatural colors, poor lighting, dull, and unclear.\\",<br>\\n1234,<br>\\n\\"fixed\\",<br>\\n5.5,<br>\\n50<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"[Comfy3D] CRM Images MVDiffusion Model\\",<br>\\n\\"pos\\": [<br>\\n510,<br>\\n990<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 470,<br>\\n\\"1\\": 340<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"crm_mvdiffusion_sampler\\",<br>\\n\\"type\\": \\"CRM_MVDIFFUSION_SAMPLER\\",<br>\\n\\"link\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"reference_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 45<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"reference_mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 34<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"multiview_images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n5,<br>\\n20,<br>\\n39<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] CRM Images MVDiffusion Model\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"3D assets\\",<br>\\n\\"uniform low no texture ugly, boring, bad anatomy, blurry, pixelated,  obscure, unnatural colors, poor lighting, dull, and unclear.\\",<br>\\n885849331451775,<br>\\n\\"randomize\\",<br>\\n5.5,<br>\\n50<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 22,<br>\\n\\"type\\": \\"BRIA_RMBG_ModelLoader_Zho\\",<br>\\n\\"pos\\": [<br>\\n-100,<br>\\n860<br>\\n],<br>\\n\\"size\\": [<br>\\n230,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"rmbgmodel\\",<br>\\n\\"type\\": \\"RMBGMODEL\\",<br>\\n\\"links\\": [<br>\\n31<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BRIA_RMBG_ModelLoader_Zho\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 23,<br>\\n\\"type\\": \\"BRIA_RMBG_Zho\\",<br>\\n\\"pos\\": [<br>\\n150,<br>\\n860<br>\\n],<br>\\n\\"size\\": [<br>\\n140,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"rmbgmodel\\",<br>\\n\\"type\\": \\"RMBGMODEL\\",<br>\\n\\"link\\": 31<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 32,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n43<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n34,<br>\\n37<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BRIA_RMBG_Zho\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 25,<br>\\n\\"type\\": \\"SplitImageWithAlpha\\",<br>\\n\\"pos\\": [<br>\\n310,<br>\\n860<br>\\n],<br>\\n\\"size\\": [<br>\\n180,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 43,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n44,<br>\\n45<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SplitImageWithAlpha\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"[Comfy3D] Save 3D Mesh\\",<br>\\n\\"pos\\": [<br>\\n1460,<br>\\n1270<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 330,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mesh\\",<br>\\n\\"type\\": \\"MESH\\",<br>\\n\\"link\\": 30<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"save_path\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n19<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Save 3D Mesh\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"CRMTest/mesh.obj\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"[Comfy3D] Preview 3DMesh\\",<br>\\n\\"pos\\": [<br>\\n510,<br>\\n1380<br>\\n],<br>\\n\\"size\\": [<br>\\n1280,<br>\\n1180<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mesh_file_path\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 19,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"mesh_file_path\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"[Comfy3D] Preview 3DMesh\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\",<br>\\nnull<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n-100,<br>\\n2140<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 590,<br>\\n\\"1\\": 420<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 21<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 15,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n-100,<br>\\n1669<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 590,<br>\\n\\"1\\": 420<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 20<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 1,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-100,<br>\\n960<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 590,<br>\\n\\"1\\": 660<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n32<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI_temp_ajvfb_00082_.png\\",<br>\\n\\"image\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n1,<br>\\n2,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"CRM_MVDIFFUSION_SAMPLER\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n5,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n\\"CRM_MVDIFFUSION_SAMPLER\\"<br>\\n],<br>\\n[<br>\\n5,<br>\\n3,<br>\\n0,<br>\\n4,<br>\\n3,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n10,<br>\\n4,<br>\\n0,<br>\\n8,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n17,<br>\\n12,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"CRM_MODEL\\"<br>\\n],<br>\\n[<br>\\n19,<br>\\n14,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n20,<br>\\n3,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n4,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n29,<br>\\n8,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n\\"MESH\\"<br>\\n],<br>\\n[<br>\\n30,<br>\\n21,<br>\\n0,<br>\\n14,<br>\\n0,<br>\\n\\"MESH\\"<br>\\n],<br>\\n[<br>\\n31,<br>\\n22,<br>\\n0,<br>\\n23,<br>\\n0,<br>\\n\\"RMBGMODEL\\"<br>\\n],<br>\\n[<br>\\n32,<br>\\n1,<br>\\n0,<br>\\n23,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n34,<br>\\n23,<br>\\n1,<br>\\n3,<br>\\n2,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n37,<br>\\n23,<br>\\n1,<br>\\n4,<br>\\n2,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n39,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n43,<br>\\n23,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n44,<br>\\n25,<br>\\n0,<br>\\n4,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n45,<br>\\n25,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/CRM Comfy 3D【Zho】.json","value":{"title":"CRM Comfy 3D【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/CRM Comfy 3D【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{l as comp,d as data};

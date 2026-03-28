import{_ as o,c as t,b as u,r,o as q}from"./app-D8VOuKyT.js";const e={};function b(s,i){const n=r("VueFlow");return q(),t("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const p=o(e,[["render",b]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/CRM%20Comfy%203D%E3%80%90Zho%E3%80%91.json.html","title":"CRM Comfy 3D【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 25, &quot;last_link_id&quot;: 45, &quot;nodes&quot;: [ { &quot;id&quot;: 12, &quot;type&quot;: &quot;[Comfy3D] Load Convolutional Reconstruction Mode...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/CRM%20Comfy%203D%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 25, &quot;last_link_id&quot;: 45, &quot;nodes&quot;: [ { &quot;id&quot;: 12, &quot;type&quot;: &quot;[Comfy3D] Load Convolutional Reconstruction Mode..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.98,"words":894},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/CRM Comfy 3D【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 25,<br>\\n&quot;last_link_id&quot;: 45,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;[Comfy3D] Load Convolutional Reconstruction Model&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1460,<br>\\n860<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 327.6000061035156,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;crm_model&quot;,<br>\\n&quot;type&quot;: &quot;CRM_MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n17<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;[Comfy3D] Load Convolutional Reconstruction Model&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;CRM.pth&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 21,<br>\\n&quot;type&quot;: &quot;[Comfy3D] Switch Mesh Axis&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1460,<br>\\n1090<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 330,<br>\\n&quot;1&quot;: 130<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mesh&quot;,<br>\\n&quot;type&quot;: &quot;MESH&quot;,<br>\\n&quot;link&quot;: 29<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;switched_mesh&quot;,<br>\\n&quot;type&quot;: &quot;MESH&quot;,<br>\\n&quot;links&quot;: [<br>\\n30<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;[Comfy3D] Switch Mesh Axis&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;-x&quot;,<br>\\n&quot;+y&quot;,<br>\\n&quot;-z&quot;,<br>\\nfalse<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 2,<br>\\n&quot;type&quot;: &quot;[Comfy3D] Load CRM MVDiffusion Model&quot;,<br>\\n&quot;pos&quot;: [<br>\\n510,<br>\\n860<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 470,<br>\\n&quot;1&quot;: 82<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;crm_mvdiffusion_sampler&quot;,<br>\\n&quot;type&quot;: &quot;CRM_MVDIFFUSION_SAMPLER&quot;,<br>\\n&quot;links&quot;: [<br>\\n1<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;[Comfy3D] Load CRM MVDiffusion Model&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;pixel-diffusion.pth&quot;,<br>\\n&quot;configs/crm_configs/sd_v2_base_ipmv_zero_SNR.yaml&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;[Comfy3D] Convolutional Reconstruction Model&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1460,<br>\\n970<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 330,<br>\\n&quot;1&quot;: 70<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;crm_model&quot;,<br>\\n&quot;type&quot;: &quot;CRM_MODEL&quot;,<br>\\n&quot;link&quot;: 17<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;multiview_images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 39<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;multiview_CCMs&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 10<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mesh&quot;,<br>\\n&quot;type&quot;: &quot;MESH&quot;,<br>\\n&quot;links&quot;: [<br>\\n29<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;[Comfy3D] Convolutional Reconstruction Model&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 5,<br>\\n&quot;type&quot;: &quot;[Comfy3D] Load CRM MVDiffusion Model&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1000,<br>\\n860<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 440,<br>\\n&quot;1&quot;: 82<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;crm_mvdiffusion_sampler&quot;,<br>\\n&quot;type&quot;: &quot;CRM_MVDIFFUSION_SAMPLER&quot;,<br>\\n&quot;links&quot;: [<br>\\n4<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;[Comfy3D] Load CRM MVDiffusion Model&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ccm-diffusion.pth&quot;,<br>\\n&quot;configs/crm_configs/sd_v2_base_ipmv_chin8_zero_snr.yaml&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 4,<br>\\n&quot;type&quot;: &quot;[Comfy3D] CRM CCMs MVDiffusion Model&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1000,<br>\\n990<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 440,<br>\\n&quot;1&quot;: 340<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;crm_mvdiffusion_sampler&quot;,<br>\\n&quot;type&quot;: &quot;CRM_MVDIFFUSION_SAMPLER&quot;,<br>\\n&quot;link&quot;: 4<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;reference_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 44<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;reference_mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 37<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;multiview_images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 5<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;multiview_CCMs&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n10,<br>\\n21<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;[Comfy3D] CRM CCMs MVDiffusion Model&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;3D assets&quot;,<br>\\n&quot;uniform low no texture ugly, boring, bad anatomy, blurry, pixelated,  obscure, unnatural colors, poor lighting, dull, and unclear.&quot;,<br>\\n1234,<br>\\n&quot;fixed&quot;,<br>\\n5.5,<br>\\n50<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;[Comfy3D] CRM Images MVDiffusion Model&quot;,<br>\\n&quot;pos&quot;: [<br>\\n510,<br>\\n990<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 470,<br>\\n&quot;1&quot;: 340<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;crm_mvdiffusion_sampler&quot;,<br>\\n&quot;type&quot;: &quot;CRM_MVDIFFUSION_SAMPLER&quot;,<br>\\n&quot;link&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;reference_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 45<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;reference_mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 34<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;multiview_images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n5,<br>\\n20,<br>\\n39<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;[Comfy3D] CRM Images MVDiffusion Model&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;3D assets&quot;,<br>\\n&quot;uniform low no texture ugly, boring, bad anatomy, blurry, pixelated,  obscure, unnatural colors, poor lighting, dull, and unclear.&quot;,<br>\\n885849331451775,<br>\\n&quot;randomize&quot;,<br>\\n5.5,<br>\\n50<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 22,<br>\\n&quot;type&quot;: &quot;BRIA_RMBG_ModelLoader_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-100,<br>\\n860<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n230,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;rmbgmodel&quot;,<br>\\n&quot;type&quot;: &quot;RMBGMODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n31<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BRIA_RMBG_ModelLoader_Zho&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 23,<br>\\n&quot;type&quot;: &quot;BRIA_RMBG_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n150,<br>\\n860<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n140,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;rmbgmodel&quot;,<br>\\n&quot;type&quot;: &quot;RMBGMODEL&quot;,<br>\\n&quot;link&quot;: 31<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 32,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n43<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n34,<br>\\n37<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BRIA_RMBG_Zho&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 25,<br>\\n&quot;type&quot;: &quot;SplitImageWithAlpha&quot;,<br>\\n&quot;pos&quot;: [<br>\\n310,<br>\\n860<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n180,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 43,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n44,<br>\\n45<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SplitImageWithAlpha&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 14,<br>\\n&quot;type&quot;: &quot;[Comfy3D] Save 3D Mesh&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1460,<br>\\n1270<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 330,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mesh&quot;,<br>\\n&quot;type&quot;: &quot;MESH&quot;,<br>\\n&quot;link&quot;: 30<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;save_path&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n19<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;[Comfy3D] Save 3D Mesh&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;CRMTest/mesh.obj&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 13,<br>\\n&quot;type&quot;: &quot;[Comfy3D] Preview 3DMesh&quot;,<br>\\n&quot;pos&quot;: [<br>\\n510,<br>\\n1380<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n1280,<br>\\n1180<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mesh_file_path&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 19,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;mesh_file_path&quot;<br>\\n}<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;[Comfy3D] Preview 3DMesh&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;,<br>\\nnull<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 16,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-100,<br>\\n2140<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 590,<br>\\n&quot;1&quot;: 420<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 21<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 15,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-100,<br>\\n1669<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 590,<br>\\n&quot;1&quot;: 420<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 20<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 1,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-100,<br>\\n960<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 590,<br>\\n&quot;1&quot;: 660<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n32<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI_temp_ajvfb_00082_.png&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n1,<br>\\n2,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;CRM_MVDIFFUSION_SAMPLER&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n5,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n&quot;CRM_MVDIFFUSION_SAMPLER&quot;<br>\\n],<br>\\n[<br>\\n5,<br>\\n3,<br>\\n0,<br>\\n4,<br>\\n3,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n10,<br>\\n4,<br>\\n0,<br>\\n8,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n17,<br>\\n12,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;CRM_MODEL&quot;<br>\\n],<br>\\n[<br>\\n19,<br>\\n14,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n20,<br>\\n3,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n21,<br>\\n4,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n29,<br>\\n8,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n&quot;MESH&quot;<br>\\n],<br>\\n[<br>\\n30,<br>\\n21,<br>\\n0,<br>\\n14,<br>\\n0,<br>\\n&quot;MESH&quot;<br>\\n],<br>\\n[<br>\\n31,<br>\\n22,<br>\\n0,<br>\\n23,<br>\\n0,<br>\\n&quot;RMBGMODEL&quot;<br>\\n],<br>\\n[<br>\\n32,<br>\\n1,<br>\\n0,<br>\\n23,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n34,<br>\\n23,<br>\\n1,<br>\\n3,<br>\\n2,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n37,<br>\\n23,<br>\\n1,<br>\\n4,<br>\\n2,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n39,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n43,<br>\\n23,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n44,<br>\\n25,<br>\\n0,<br>\\n4,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n45,<br>\\n25,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/CRM Comfy 3D【Zho】.json","value":{"title":"CRM Comfy 3D【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/CRM Comfy 3D【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,m as data};

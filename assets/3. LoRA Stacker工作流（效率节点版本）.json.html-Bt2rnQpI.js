import{_ as r,e,h as b,r as o,o as t}from"./app-EuS-Ookm.js";const a={};function l(s,i){const n=o("VueFlow");return t(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 29,
  "last_link_id": 56,
  "nodes": [
    {
      "id": 26,
      "type": "LoRA Stacker",
      "pos": [
        540,
        270
      ],
      "size": {
        "0": 320,
        "1": 322
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [
        {
          "name": "lora_stack",
          "type": "LORA_STACK",
          "link": null,
          "label": "LoRA堆"
        }
      ],
      "outputs": [
        {
          "name": "LORA_STACK",
          "type": "LORA_STACK",
          "links": [
            49
          ],
          "shape": 3,
          "label": "LoRA堆"
        }
      ],
      "properties": {
        "Node name for S&R": "LoRA Stacker"
      },
      "widgets_values": [
        "simple",
        5,
        "lucy_(cyberpunk)_v10.safetensors",
        0.92,
        1,
        1,
        "3DMM_V12.safetensors",
        0.62,
        1,
        1,
        "epi_noiseoffset2.safetensors",
        0.76,
        1,
        1,
        "fashigirl-v5.5-lora-naivae-64dim.safetensors",
        0.5,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1,
        "None",
        1,
        1,
        1
      ],
      "color": "#222233",
      "bgcolor": "#333355",
      "shape": 1
    },
    {
      "id": 27,
      "type": "KSampler",
      "pos": [
        1340.7842035037581,
        202.19752930643835
      ],
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 50,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 51,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 52,
          "label": "负面条件"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 53,
          "label": "Latent",
          "slot_index": 3
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            54
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        0,
        "randomize",
        20,
        8,
        "euler",
        "normal",
        1
      ]
    },
    {
      "id": 24,
      "type": "Efficient Loader",
      "pos": [
        900,
        200
      ],
      "size": {
        "0": 400,
        "1": 462
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [
        {
          "name": "lora_stack",
          "type": "LORA_STACK",
          "link": 49,
          "label": "LoRA堆",
          "slot_index": 0
        },
        {
          "name": "cnet_stack",
          "type": "CONTROL_NET_STACK",
          "link": null,
          "label": "ControlNet堆"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            50
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CONDITIONING+",
          "type": "CONDITIONING",
          "links": [
            51
          ],
          "shape": 3,
          "label": "正面条件",
          "slot_index": 1
        },
        {
          "name": "CONDITIONING-",
          "type": "CONDITIONING",
          "links": [
            52
          ],
          "shape": 3,
          "label": "负面条件",
          "slot_index": 2
        },
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            53
          ],
          "shape": 3,
          "label": "Latent"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            55
          ],
          "shape": 3,
          "label": "VAE",
          "slot_index": 4
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": null,
          "shape": 3,
          "label": "CLIP"
        },
        {
          "name": "DEPENDENCIES",
          "type": "DEPENDENCIES",
          "links": null,
          "shape": 3,
          "label": "依赖"
        }
      ],
      "properties": {
        "Node name for S&R": "Efficient Loader"
      },
      "widgets_values": [
        "AWPainting_v1.3.safetensors",
        "Baked VAE",
        -1,
        "None",
        1,
        1,
        "masterpiece, best quality, close-up photo, highres, lu1, cyborg, multicolored hair, makeup, bare shoulders, black leotard, white jacket, open jacket, belt, shorts, , planet, moon, earth (planet)",
        "embedding:EasyNegative, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, (worst quality:1.2), low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, lowres graffiti, (low quality lowres simple background:1.1),",
        "none",
        "comfy",
        512,
        512,
        1
      ],
      "color": "#222233",
      "bgcolor": "#333355",
      "shape": 1
    },
    {
      "id": 28,
      "type": "VAEDecode",
      "pos": [
        1680,
        200
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 54,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 55,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            56
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 29,
      "type": "SaveImage",
      "pos": [
        1680,
        290
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 56,
          "label": "图像"
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    }
  ],
  "links": [
    [
      49,
      26,
      0,
      24,
      0,
      "LORA_STACK"
    ],
    [
      50,
      24,
      0,
      27,
      0,
      "MODEL"
    ],
    [
      51,
      24,
      1,
      27,
      1,
      "CONDITIONING"
    ],
    [
      52,
      24,
      2,
      27,
      2,
      "CONDITIONING"
    ],
    [
      53,
      24,
      3,
      27,
      3,
      "LATENT"
    ],
    [
      54,
      27,
      0,
      28,
      0,
      "LATENT"
    ],
    [
      55,
      24,
      4,
      28,
      1,
      "VAE"
    ],
    [
      56,
      28,
      0,
      29,
      0,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "0246.VERSION": [
      0,
      0,
      4
    ]
  },
  "version": 0.4
}
`})])}const N=r(a,[["render",l],["__file","3. LoRA Stacker工作流（效率节点版本）.json.html.vue"]]),d=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/3.%20LoRA%20Stacker%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%95%88%E7%8E%87%E8%8A%82%E7%82%B9%E7%89%88%E6%9C%AC%EF%BC%89.json.html","title":"3. LoRA Stacker工作流（效率节点版本）.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 29, \\"last_link_id\\": 56, \\"nodes\\": [ { \\"id\\": 26, \\"type\\": \\"LoRA Stacker\\", \\"pos\\": [ 540, 270 ], \\"size\\": { \\"0\\": 320, \\"1\\": 322 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0,...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/3.%20LoRA%20Stacker%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%95%88%E7%8E%87%E8%8A%82%E7%82%B9%E7%89%88%E6%9C%AC%EF%BC%89.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 29, \\"last_link_id\\": 56, \\"nodes\\": [ { \\"id\\": 26, \\"type\\": \\"LoRA Stacker\\", \\"pos\\": [ 540, 270 ], \\"size\\": { \\"0\\": 320, \\"1\\": 322 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.37,"words":710},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/3. LoRA Stacker工作流（效率节点版本）.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 29,<br>\\n\\"last_link_id\\": 56,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 26,<br>\\n\\"type\\": \\"LoRA Stacker\\",<br>\\n\\"pos\\": [<br>\\n540,<br>\\n270<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 322<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"lora_stack\\",<br>\\n\\"type\\": \\"LORA_STACK\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"LoRA堆\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LORA_STACK\\",<br>\\n\\"type\\": \\"LORA_STACK\\",<br>\\n\\"links\\": [<br>\\n49<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"LoRA堆\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoRA Stacker\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"simple\\",<br>\\n5,<br>\\n\\"lucy_(cyberpunk)_v10.safetensors\\",<br>\\n0.92,<br>\\n1,<br>\\n1,<br>\\n\\"3DMM_V12.safetensors\\",<br>\\n0.62,<br>\\n1,<br>\\n1,<br>\\n\\"epi_noiseoffset2.safetensors\\",<br>\\n0.76,<br>\\n1,<br>\\n1,<br>\\n\\"fashigirl-v5.5-lora-naivae-64dim.safetensors\\",<br>\\n0.5,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#222233\\",<br>\\n\\"bgcolor\\": \\"#333355\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 27,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n1340.7842035037581,<br>\\n202.19752930643835<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 262<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 50,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 51,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 52,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 53,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n54<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n8,<br>\\n\\"euler\\",<br>\\n\\"normal\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 24,<br>\\n\\"type\\": \\"Efficient Loader\\",<br>\\n\\"pos\\": [<br>\\n900,<br>\\n200<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 462<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"lora_stack\\",<br>\\n\\"type\\": \\"LORA_STACK\\",<br>\\n\\"link\\": 49,<br>\\n\\"label\\": \\"LoRA堆\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cnet_stack\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"ControlNet堆\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n50<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING+\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n51<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"正面条件\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING-\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n52<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"负面条件\\",<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n53<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n55<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\",<br>\\n\\"slot_index\\": 4<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"DEPENDENCIES\\",<br>\\n\\"type\\": \\"DEPENDENCIES\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"依赖\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Efficient Loader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"AWPainting_v1.3.safetensors\\",<br>\\n\\"Baked VAE\\",<br>\\n-1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n\\"masterpiece, best quality, close-up photo, highres, lu1, cyborg, multicolored hair, makeup, bare shoulders, black leotard, white jacket, open jacket, belt, shorts, , planet, moon, earth (planet)\\",<br>\\n\\"embedding:EasyNegative, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, (worst quality:1.2), low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, lowres graffiti, (low quality lowres simple background:1.1),\\",<br>\\n\\"none\\",<br>\\n\\"comfy\\",<br>\\n512,<br>\\n512,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#222233\\",<br>\\n\\"bgcolor\\": \\"#333355\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 28,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n1680,<br>\\n200<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 54,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 55,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n56<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 29,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n1680,<br>\\n290<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 56,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n49,<br>\\n26,<br>\\n0,<br>\\n24,<br>\\n0,<br>\\n\\"LORA_STACK\\"<br>\\n],<br>\\n[<br>\\n50,<br>\\n24,<br>\\n0,<br>\\n27,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n51,<br>\\n24,<br>\\n1,<br>\\n27,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n52,<br>\\n24,<br>\\n2,<br>\\n27,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n53,<br>\\n24,<br>\\n3,<br>\\n27,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n54,<br>\\n27,<br>\\n0,<br>\\n28,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n55,<br>\\n24,<br>\\n4,<br>\\n28,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n56,<br>\\n28,<br>\\n0,<br>\\n29,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/3. LoRA Stacker工作流（效率节点版本）.json","value":{"title":"3. LoRA Stacker工作流（效率节点版本）.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/3. LoRA Stacker工作流（效率节点版本）.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{N as comp,d as data};

import{_ as t,c as o,b as u,r,o as q}from"./app-CQkeIggD.js";const e={};function b(a,l){const n=r("VueFlow");return q(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 17,
  "last_link_id": 24,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1210,
        250
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
          "link": 7,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 14,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            9
          ],
          "slot_index": 0,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1453,
        247
      ],
      "size": {
        "0": 393.6202087402344,
        "1": 449.1610107421875
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9,
          "label": "图像"
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 12,
      "type": "ControlNetLoader",
      "pos": [
        -50,
        69
      ],
      "size": {
        "0": 422,
        "1": 58
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            13
          ],
          "slot_index": 0,
          "label": "ControlNet"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "control_v11p_sd15_openpose.pth"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        439,
        446
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            2
          ],
          "slot_index": 0,
          "label": "Latent"
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
      "id": 13,
      "type": "VAELoader",
      "pos": [
        840,
        30
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            14
          ],
          "slot_index": 0,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "animevae.pt"
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        842,
        150
      ],
      "size": {
        "0": 320,
        "1": 470
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 19,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 18,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 16,
          "label": "负面条件"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 2,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        591832410064249,
        "randomize",
        24,
        6,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 14,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -390,
        -40
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            19
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            20,
            21
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "awpainting_v12.safetensors"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        355,
        213
      ],
      "size": {
        "0": 425.27801513671875,
        "1": 180.6060791015625
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 20,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            16
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis), embedding:EasyNegative, embedding:badhandv4, "
      ]
    },
    {
      "id": 10,
      "type": "ControlNetApply",
      "pos": [
        459,
        51
      ],
      "size": {
        "0": 317.4000244140625,
        "1": 98
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 10,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 13,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 23,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            18
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0.8
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        -42,
        -147
      ],
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 21,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            10
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "masterpiece, best quality, highres, 1girl, bare shoulders, blonde hair, long hair, white background, shining green dress, looking at viewer, face light, low contrast, outdoors, sea of white flowers, plants, cinematic lights, lightrays,"
      ]
    },
    {
      "id": 11,
      "type": "LoadImage",
      "pos": [
        -520,
        140
      ],
      "size": {
        "0": 387.97003173828125,
        "1": 465.5097961425781
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            22
          ],
          "slot_index": 0,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "00086-3734888691.png",
        "image"
      ]
    },
    {
      "id": 16,
      "type": "OpenposePreprocessor",
      "pos": [
        -40,
        230
      ],
      "size": {
        "0": 315,
        "1": 150
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 22,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            23,
            24
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        },
        {
          "name": "POSE_KEYPOINT",
          "type": "POSE_KEYPOINT",
          "links": null,
          "shape": 3,
          "label": "姿态关键点"
        }
      ],
      "properties": {
        "Node name for S&R": "OpenposePreprocessor"
      },
      "widgets_values": [
        "enable",
        "enable",
        "enable",
        512
      ]
    },
    {
      "id": 17,
      "type": "PreviewImage",
      "pos": [
        10,
        450
      ],
      "size": {
        "0": 210,
        "1": 26
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 24,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    }
  ],
  "links": [
    [
      2,
      5,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      7,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      9,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      10,
      6,
      0,
      10,
      0,
      "CONDITIONING"
    ],
    [
      13,
      12,
      0,
      10,
      1,
      "CONTROL_NET"
    ],
    [
      14,
      13,
      0,
      8,
      1,
      "VAE"
    ],
    [
      16,
      7,
      0,
      3,
      2,
      "CONDITIONING"
    ],
    [
      18,
      10,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      19,
      14,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      20,
      14,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      21,
      14,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      22,
      11,
      0,
      16,
      0,
      "IMAGE"
    ],
    [
      23,
      16,
      0,
      10,
      2,
      "IMAGE"
    ],
    [
      24,
      16,
      0,
      17,
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
`})])}const i=t(e,[["render",b]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/5.%20ControlNet%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E5%90%ABOpenpose%E9%A2%84%E5%A4%84%E7%90%86%EF%BC%89.json.html","title":"5. ControlNet基本工作流（含Openpose预处理）.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 17, &quot;last_link_id&quot;: 24, &quot;nodes&quot;: [ { &quot;id&quot;: 8, &quot;type&quot;: &quot;VAEDecode&quot;, &quot;pos&quot;: [ 1210, 250 ], ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/5.%20ControlNet%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E5%90%ABOpenpose%E9%A2%84%E5%A4%84%E7%90%86%EF%BC%89.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 17, &quot;last_link_id&quot;: 24, &quot;nodes&quot;: [ { &quot;id&quot;: 8, &quot;type&quot;: &quot;VAEDecode&quot;, &quot;pos&quot;: [ 1210, 250 ], ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.72,"words":815},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/5. ControlNet基本工作流（含Openpose预处理）.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 17,<br>\\n&quot;last_link_id&quot;: 24,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1210,<br>\\n250<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 7,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 14,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n9<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 9,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1453,<br>\\n247<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 393.6202087402344,<br>\\n&quot;1&quot;: 449.1610107421875<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 9,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;ControlNetLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-50,<br>\\n69<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 422,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;links&quot;: [<br>\\n13<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;control_v11p_sd15_openpose.pth&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 5,<br>\\n&quot;type&quot;: &quot;EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n439,<br>\\n446<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n2<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n512,<br>\\n768,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 13,<br>\\n&quot;type&quot;: &quot;VAELoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n840,<br>\\n30<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n14<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAELoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;<a href=\\"http://animevae.pt\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">animevae.pt</a>&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n842,<br>\\n150<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 470<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 19,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 18,<br>\\n&quot;label&quot;: &quot;正面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 16,<br>\\n&quot;label&quot;: &quot;负面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 2,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n591832410064249,<br>\\n&quot;randomize&quot;,<br>\\n24,<br>\\n6,<br>\\n&quot;dpmpp_2m&quot;,<br>\\n&quot;karras&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 14,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-390,<br>\\n-40<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n19<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n20,<br>\\n21<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;awpainting_v12.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n355,<br>\\n213<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 425.27801513671875,<br>\\n&quot;1&quot;: 180.6060791015625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 20,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n16<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis), embedding:EasyNegative, embedding:badhandv4, &quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 10,<br>\\n&quot;type&quot;: &quot;ControlNetApply&quot;,<br>\\n&quot;pos&quot;: [<br>\\n459,<br>\\n51<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 317.4000244140625,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 10,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;control_net&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;link&quot;: 13,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 23,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n18<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetApply&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0.8<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-42,<br>\\n-147<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 422.84503173828125,<br>\\n&quot;1&quot;: 164.31304931640625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 21,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n10<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;masterpiece, best quality, highres, 1girl, bare shoulders, blonde hair, long hair, white background, shining green dress, looking at viewer, face light, low contrast, outdoors, sea of white flowers, plants, cinematic lights, lightrays,&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 11,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-520,<br>\\n140<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 387.97003173828125,<br>\\n&quot;1&quot;: 465.5097961425781<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n22<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;00086-3734888691.png&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 16,<br>\\n&quot;type&quot;: &quot;OpenposePreprocessor&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-40,<br>\\n230<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 150<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 22,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n23,<br>\\n24<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;POSE_KEYPOINT&quot;,<br>\\n&quot;type&quot;: &quot;POSE_KEYPOINT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;姿态关键点&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;OpenposePreprocessor&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;enable&quot;,<br>\\n&quot;enable&quot;,<br>\\n&quot;enable&quot;,<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 17,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n10,<br>\\n450<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 26<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 24,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n2,<br>\\n5,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n9,<br>\\n8,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n10,<br>\\n6,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n13,<br>\\n12,<br>\\n0,<br>\\n10,<br>\\n1,<br>\\n&quot;CONTROL_NET&quot;<br>\\n],<br>\\n[<br>\\n14,<br>\\n13,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n16,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n18,<br>\\n10,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n19,<br>\\n14,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n20,<br>\\n14,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n21,<br>\\n14,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n22,<br>\\n11,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n23,<br>\\n16,<br>\\n0,<br>\\n10,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n24,<br>\\n16,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;0246.VERSION&quot;: [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/5. ControlNet基本工作流（含Openpose预处理）.json","value":{"title":"5. ControlNet基本工作流（含Openpose预处理）.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/5. ControlNet基本工作流（含Openpose预处理）.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,p as data};

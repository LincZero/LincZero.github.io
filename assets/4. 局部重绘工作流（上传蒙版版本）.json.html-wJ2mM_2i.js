import{_ as t,c as o,b as u,r as q,o as r}from"./app-k1oQHSab.js";const b={};function e(a,s){const n=q("VueFlow");return r(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 65,
  "last_link_id": 138,
  "nodes": [
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        350,
        410
      ],
      "size": {
        "0": 425.27801513671875,
        "1": 180.6060791015625
      },
      "flags": {},
      "order": 4,
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
        "nsfw, (worst quality), (low quality), (normal quality), "
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1260,
        150
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 10,
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
          "link": 84,
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
      }
    },
    {
      "id": 29,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -50,
        350
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 0,
      "mode": 0,
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
            84,
            89
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "AWPainting_v1.3.safetensors"
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1260,
        240
      ],
      "size": {
        "0": 340,
        "1": 350
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 22,
          "label": "图像"
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        940,
        150
      ],
      "size": {
        "0": 300,
        "1": 470
      },
      "flags": {},
      "order": 9,
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
          "link": 92,
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
        669543285694812,
        "randomize",
        30,
        8,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 34,
      "type": "VAEEncode",
      "pos": [
        1090,
        860
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 88,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 89,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            91
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      }
    },
    {
      "id": 33,
      "type": "SetLatentNoiseMask",
      "pos": [
        1400,
        750
      ],
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
          "link": 91,
          "label": "Latent"
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 129,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            92
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "SetLatentNoiseMask"
      }
    },
    {
      "id": 20,
      "type": "LoadImage",
      "pos": [
        10,
        690
      ],
      "size": {
        "0": 385,
        "1": 365
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            88
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
        "clipspace/clipspace-mask-7249457.5.png [input]",
        "image"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        350,
        200
      ],
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 3,
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
        "1girl, upper body, from below, blurry background, depth of field, scenery, outdoors, sky,glimmer, sky, scenery, no humans, cloud, outdoors, morning,dappled_sunlight, , forest, mountains, horizon"
      ]
    },
    {
      "id": 56,
      "type": "ImpactGaussianBlurMask",
      "pos": [
        1070,
        730
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 138,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            129
          ],
          "shape": 3,
          "label": "遮罩",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImpactGaussianBlurMask"
      },
      "widgets_values": [
        5,
        10
      ]
    },
    {
      "id": 61,
      "type": "ImageToMask",
      "pos": [
        790,
        740
      ],
      "size": {
        "0": 250,
        "1": 60
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 137,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            138
          ],
          "shape": 3,
          "label": "遮罩",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageToMask"
      },
      "widgets_values": [
        "red"
      ]
    },
    {
      "id": 65,
      "type": "LoadImage",
      "pos": [
        430,
        710
      ],
      "size": [
        320,
        314
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            137
          ],
          "shape": 3,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "mask.jpg",
        "image"
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
      84,
      29,
      2,
      8,
      1,
      "VAE"
    ],
    [
      88,
      20,
      0,
      34,
      0,
      "IMAGE"
    ],
    [
      89,
      29,
      2,
      34,
      1,
      "VAE"
    ],
    [
      91,
      34,
      0,
      33,
      0,
      "LATENT"
    ],
    [
      92,
      33,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      129,
      56,
      0,
      33,
      1,
      "MASK"
    ],
    [
      137,
      65,
      0,
      61,
      0,
      "IMAGE"
    ],
    [
      138,
      61,
      0,
      56,
      0,
      "MASK"
    ]
  ],
  "groups": [
    {
      "title": "Load image and alpha mask for inpainting",
      "bounding": [
        -20,
        607,
        1677,
        465
      ],
      "color": "#8A8",
      "font_size": 24,
      "locked": false
    }
  ],
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
`})])}const i=t(b,[["render",e]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/4.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E4%B8%8A%E4%BC%A0%E8%92%99%E7%89%88%E7%89%88%E6%9C%AC%EF%BC%89.json.html","title":"4. 局部重绘工作流（上传蒙版版本）.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 65, &quot;last_link_id&quot;: 138, &quot;nodes&quot;: [ { &quot;id&quot;: 7, &quot;type&quot;: &quot;CLIPTextEncode&quot;, &quot;pos&quot;: [ 350, 41...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/4.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E4%B8%8A%E4%BC%A0%E8%92%99%E7%89%88%E7%89%88%E6%9C%AC%EF%BC%89.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 65, &quot;last_link_id&quot;: 138, &quot;nodes&quot;: [ { &quot;id&quot;: 7, &quot;type&quot;: &quot;CLIPTextEncode&quot;, &quot;pos&quot;: [ 350, 41..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.62,"words":787},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/4. 局部重绘工作流（上传蒙版版本）.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 65,<br>\\n&quot;last_link_id&quot;: 138,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n350,<br>\\n410<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 425.27801513671875,<br>\\n&quot;1&quot;: 180.6060791015625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 82,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n6<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;nsfw, (worst quality), (low quality), (normal quality), &quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1260,<br>\\n150<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 42,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 84,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n22<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 29,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-50,<br>\\n350<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n80<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n81,<br>\\n82<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n84,<br>\\n89<br>\\n],<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;AWPainting_v1.3.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 9,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1260,<br>\\n240<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 340,<br>\\n&quot;1&quot;: 350<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 22,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n940,<br>\\n150<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 300,<br>\\n&quot;1&quot;: 470<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 80,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 4,<br>\\n&quot;label&quot;: &quot;正面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 6,<br>\\n&quot;label&quot;: &quot;负面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 92,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n42<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n669543285694812,<br>\\n&quot;randomize&quot;,<br>\\n30,<br>\\n8,<br>\\n&quot;dpmpp_2m&quot;,<br>\\n&quot;karras&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 34,<br>\\n&quot;type&quot;: &quot;VAEEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1090,<br>\\n860<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;pixels&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 88,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 89,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n91<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEEncode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 33,<br>\\n&quot;type&quot;: &quot;SetLatentNoiseMask&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1400,<br>\\n750<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 91,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 129,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n92<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SetLatentNoiseMask&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 20,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n10,<br>\\n690<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 385,<br>\\n&quot;1&quot;: 365<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n88<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;clipspace/clipspace-mask-7249457.5.png [input]&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n350,<br>\\n200<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 422.84503173828125,<br>\\n&quot;1&quot;: 164.31304931640625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 81,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n4<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;1girl, upper body, from below, blurry background, depth of field, scenery, outdoors, sky,glimmer, sky, scenery, no humans, cloud, outdoors, morning,dappled_sunlight, , forest, mountains, horizon&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 56,<br>\\n&quot;type&quot;: &quot;ImpactGaussianBlurMask&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1070,<br>\\n730<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 82<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 138,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n129<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImpactGaussianBlurMask&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n5,<br>\\n10<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 61,<br>\\n&quot;type&quot;: &quot;ImageToMask&quot;,<br>\\n&quot;pos&quot;: [<br>\\n790,<br>\\n740<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 250,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 137,<br>\\n&quot;label&quot;: &quot;图像&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n138<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageToMask&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;red&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 65,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n430,<br>\\n710<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n314<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n137<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;mask.jpg&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n4,<br>\\n6,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n22,<br>\\n8,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n42,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n80,<br>\\n29,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n81,<br>\\n29,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n82,<br>\\n29,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n84,<br>\\n29,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n88,<br>\\n20,<br>\\n0,<br>\\n34,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n89,<br>\\n29,<br>\\n2,<br>\\n34,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n91,<br>\\n34,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n92,<br>\\n33,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n129,<br>\\n56,<br>\\n0,<br>\\n33,<br>\\n1,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n137,<br>\\n65,<br>\\n0,<br>\\n61,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n138,<br>\\n61,<br>\\n0,<br>\\n56,<br>\\n0,<br>\\n&quot;MASK&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [<br>\\n{<br>\\n&quot;title&quot;: &quot;Load image and alpha mask for inpainting&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n-20,<br>\\n607,<br>\\n1677,<br>\\n465<br>\\n],<br>\\n&quot;color&quot;: &quot;#8A8&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n}<br>\\n],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;0246.VERSION&quot;: [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/4. 局部重绘工作流（上传蒙版版本）.json","value":{"title":"4. 局部重绘工作流（上传蒙版版本）.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/4. 局部重绘工作流（上传蒙版版本）.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,p as data};

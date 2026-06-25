import{_ as t,c as o,b as u,r as q,o as r}from"./app-CQkeIggD.js";const e={};function b(a,l){const n=q("VueFlow");return r(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 17,
  "last_link_id": 23,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1235.7215576171875,
        "1": 577.1878662109375
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 7,
          "label": "samples"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 21,
          "label": "vae"
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
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 10,
      "type": "LatentUpscale",
      "pos": {
        "0": 1238,
        "1": 170
      },
      "size": {
        "0": 315,
        "1": 130
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 10,
          "label": "samples"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            14
          ],
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "LatentUpscale"
      },
      "widgets_values": [
        "nearest-exact",
        1152,
        1152,
        "disabled"
      ]
    },
    {
      "id": 13,
      "type": "VAEDecode",
      "pos": {
        "0": 1961,
        "1": 125
      },
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
          "link": 15,
          "label": "samples"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 22,
          "label": "vae"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            17
          ],
          "slot_index": 0,
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 374,
        "1": 171
      },
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
          "link": 19,
          "label": "clip"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            4,
            12
          ],
          "slot_index": 0,
          "label": "CONDITIONING"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "masterpiece HDR victorian portrait painting of woman, blonde hair, mountain nature, blue sky\\n"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": {
        "0": 435,
        "1": 600
      },
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            2
          ],
          "slot_index": 0,
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        768,
        768,
        1
      ]
    },
    {
      "id": 11,
      "type": "KSampler",
      "pos": {
        "0": 1585,
        "1": 114
      },
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 23,
          "slot_index": 0,
          "label": "model"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 12,
          "slot_index": 1,
          "label": "positive"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 13,
          "slot_index": 2,
          "label": "negative"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 14,
          "slot_index": 3,
          "label": "latent_image"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            15
          ],
          "slot_index": 0,
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        497066463919513,
        "randomize",
        14,
        8,
        "dpmpp_2m",
        "simple",
        0.5
      ]
    },
    {
      "id": 12,
      "type": "SaveImage",
      "pos": {
        "0": 2203,
        "1": 123
      },
      "size": {
        "0": 407.53717041015625,
        "1": 468.13226318359375
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 17,
          "label": "images"
        }
      ],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 845,
        "1": 172
      },
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 18,
          "label": "model"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 4,
          "label": "positive"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 6,
          "label": "negative"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 2,
          "label": "latent_image"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7,
            10
          ],
          "slot_index": 0,
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        748940210657206,
        "randomize",
        12,
        8,
        "dpmpp_sde",
        "normal",
        1
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1495.7215576171875,
        "1": 576.1878662109375
      },
      "size": {
        "0": 232.94032287597656,
        "1": 282.4336242675781
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9,
          "label": "images"
        }
      ],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 16,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": 24,
        "1": 315
      },
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            18,
            23
          ],
          "slot_index": 0,
          "label": "MODEL"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            19,
            20
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            21,
            22
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "v2-1_768-ema-pruned.ckpt"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 377,
        "1": 381
      },
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
          "link": 20,
          "label": "clip"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6,
            13
          ],
          "slot_index": 0,
          "label": "CONDITIONING"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "bad hands, text, watermark\\n"
      ]
    },
    {
      "id": 17,
      "type": "Note",
      "pos": {
        "0": 10,
        "1": 799
      },
      "size": [
        809.2703886133163,
        489.22022728532056
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "## Stable Diffustion 方式\\n\\n在SD UI里，有三种方式：\\n1. 文生图的 \\"高清修复\\" (Hi-res fix)\\n2. 图生图的 \\"SD放大\\" (SD Upscale) 脚本\\n3. 后期处理中的算法放大\\n\\n## ComfyUI 方式\\n\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\n里面有三个图(工作流)：\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\n2. hiresfix_esrgan_workflow\\n3. latent_upscale_different_prompt_model\\n\\n### hiresfix_latent_workflow\\n\\n核心：\\n\\n1. 使用Upscale Latent节点，将一开始的768尺寸放大到1152尺寸\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\n2. 注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\n   于是就有了第二次KSample\\n\\n要项：\\n\\n1. 降噪强度(重绘强度)\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\n\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\n\\n### hiresfix_esrgan_workflow\\n\\n借助ESRGAN等传统放大模型来实现这个放大过程\\n\\n更复杂\\n\\n"
      ],
      "color": "#432",
      "bgcolor": "#653"
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
      3,
      0,
      10,
      0,
      "LATENT"
    ],
    [
      12,
      6,
      0,
      11,
      1,
      "CONDITIONING"
    ],
    [
      13,
      7,
      0,
      11,
      2,
      "CONDITIONING"
    ],
    [
      14,
      10,
      0,
      11,
      3,
      "LATENT"
    ],
    [
      15,
      11,
      0,
      13,
      0,
      "LATENT"
    ],
    [
      17,
      13,
      0,
      12,
      0,
      "IMAGE"
    ],
    [
      18,
      16,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      19,
      16,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      20,
      16,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      21,
      16,
      2,
      8,
      1,
      "VAE"
    ],
    [
      22,
      16,
      2,
      13,
      1,
      "VAE"
    ],
    [
      23,
      16,
      0,
      11,
      0,
      "MODEL"
    ]
  ],
  "groups": [
    {
      "title": "Txt2Img",
      "bounding": [
        -1,
        30,
        1211,
        708
      ],
      "color": "#a1309b",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Save Intermediate Image",
      "bounding": [
        1225,
        500,
        516,
        196
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Hires Fix",
      "bounding": [
        1224,
        29,
        710,
        464
      ],
      "color": "#b58b2a",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Save Final Image",
      "bounding": [
        1949,
        31,
        483,
        199
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    }
  ],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        79.7296113866837,
        -337.5535555323909
      ]
    },
    "0246.VERSION": [
      0,
      0,
      4
    ]
  },
  "version": 0.4
}
`})])}const i=t(e,[["render",b]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/1.%20Latent%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html","title":"1. Latent放大工作流.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 17, &quot;last_link_id&quot;: 23, &quot;nodes&quot;: [ { &quot;id&quot;: 8, &quot;type&quot;: &quot;VAEDecode&quot;, &quot;pos&quot;: { &quot;0&quot;...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/1.%20Latent%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 17, &quot;last_link_id&quot;: 23, &quot;nodes&quot;: [ { &quot;id&quot;: 8, &quot;type&quot;: &quot;VAEDecode&quot;, &quot;pos&quot;: { &quot;0&quot;..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":3.89,"words":1168},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/1. Latent放大工作流.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 17,<br>\\n&quot;last_link_id&quot;: 23,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1235.7215576171875,<br>\\n&quot;1&quot;: 577.1878662109375<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 7,<br>\\n&quot;label&quot;: &quot;samples&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 21,<br>\\n&quot;label&quot;: &quot;vae&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n9<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 10,<br>\\n&quot;type&quot;: &quot;LatentUpscale&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1238,<br>\\n&quot;1&quot;: 170<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 130<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 10,<br>\\n&quot;label&quot;: &quot;samples&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n14<br>\\n],<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LatentUpscale&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;nearest-exact&quot;,<br>\\n1152,<br>\\n1152,<br>\\n&quot;disabled&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 13,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1961,<br>\\n&quot;1&quot;: 125<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 15,<br>\\n&quot;label&quot;: &quot;samples&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 22,<br>\\n&quot;label&quot;: &quot;vae&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n17<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 374,<br>\\n&quot;1&quot;: 171<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 422.84503173828125,<br>\\n&quot;1&quot;: 164.31304931640625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 19,<br>\\n&quot;label&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n4,<br>\\n12<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;CONDITIONING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;masterpiece HDR victorian portrait painting of woman, blonde hair, mountain nature, blue sky\\\\n&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 5,<br>\\n&quot;type&quot;: &quot;EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 435,<br>\\n&quot;1&quot;: 600<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n2<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n768,<br>\\n768,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 11,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1585,<br>\\n&quot;1&quot;: 114<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 262<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 23,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;model&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 12,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;positive&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 13,<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;label&quot;: &quot;negative&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 14,<br>\\n&quot;slot_index&quot;: 3,<br>\\n&quot;label&quot;: &quot;latent_image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n15<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n497066463919513,<br>\\n&quot;randomize&quot;,<br>\\n14,<br>\\n8,<br>\\n&quot;dpmpp_2m&quot;,<br>\\n&quot;simple&quot;,<br>\\n0.5<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 2203,<br>\\n&quot;1&quot;: 123<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 407.53717041015625,<br>\\n&quot;1&quot;: 468.13226318359375<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 17,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 845,<br>\\n&quot;1&quot;: 172<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 262<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 18,<br>\\n&quot;label&quot;: &quot;model&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 4,<br>\\n&quot;label&quot;: &quot;positive&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 6,<br>\\n&quot;label&quot;: &quot;negative&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 2,<br>\\n&quot;label&quot;: &quot;latent_image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n7,<br>\\n10<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n748940210657206,<br>\\n&quot;randomize&quot;,<br>\\n12,<br>\\n8,<br>\\n&quot;dpmpp_sde&quot;,<br>\\n&quot;normal&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 9,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1495.7215576171875,<br>\\n&quot;1&quot;: 576.1878662109375<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 232.94032287597656,<br>\\n&quot;1&quot;: 282.4336242675781<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 9,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 16,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 24,<br>\\n&quot;1&quot;: 315<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n18,<br>\\n23<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;MODEL&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n19,<br>\\n20<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n21,<br>\\n22<br>\\n],<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;v2-1_768-ema-pruned.ckpt&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 377,<br>\\n&quot;1&quot;: 381<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 425.27801513671875,<br>\\n&quot;1&quot;: 180.6060791015625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 20,<br>\\n&quot;label&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n6,<br>\\n13<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;CONDITIONING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;bad hands, text, watermark\\\\n&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 17,<br>\\n&quot;type&quot;: &quot;Note&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 10,<br>\\n&quot;1&quot;: 799<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n809.2703886133163,<br>\\n489.22022728532056<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;## Stable Diffustion 方式\\\\n\\\\n在SD UI里，有三种方式：\\\\n1. 文生图的 &quot;高清修复&quot; (Hi-res fix)\\\\n2. 图生图的 &quot;SD放大&quot; (SD Upscale) 脚本\\\\n3. 后期处理中的算法放大\\\\n\\\\n## ComfyUI 方式\\\\n\\\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\\\n里面有三个图(工作流)：\\\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\\\n2. hiresfix_esrgan_workflow\\\\n3. latent_upscale_different_prompt_model\\\\n\\\\n### hiresfix_latent_workflow\\\\n\\\\n核心：\\\\n\\\\n1. 使用Upscale Latent节点，将一开始的768尺寸放大到1152尺寸\\\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\\\n2. 注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\\\n   于是就有了第二次KSample\\\\n\\\\n要项：\\\\n\\\\n1. 降噪强度(重绘强度)\\\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\\\n\\\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\\\n\\\\n### hiresfix_esrgan_workflow\\\\n\\\\n借助ESRGAN等传统放大模型来实现这个放大过程\\\\n\\\\n更复杂\\\\n\\\\n&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n2,<br>\\n5,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n6,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n9,<br>\\n8,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n10,<br>\\n3,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n12,<br>\\n6,<br>\\n0,<br>\\n11,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n13,<br>\\n7,<br>\\n0,<br>\\n11,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n14,<br>\\n10,<br>\\n0,<br>\\n11,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n15,<br>\\n11,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n17,<br>\\n13,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n18,<br>\\n16,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n19,<br>\\n16,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n20,<br>\\n16,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n21,<br>\\n16,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n22,<br>\\n16,<br>\\n2,<br>\\n13,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n23,<br>\\n16,<br>\\n0,<br>\\n11,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [<br>\\n{<br>\\n&quot;title&quot;: &quot;Txt2Img&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n-1,<br>\\n30,<br>\\n1211,<br>\\n708<br>\\n],<br>\\n&quot;color&quot;: &quot;#a1309b&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Save Intermediate Image&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n1225,<br>\\n500,<br>\\n516,<br>\\n196<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Hires Fix&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n1224,<br>\\n29,<br>\\n710,<br>\\n464<br>\\n],<br>\\n&quot;color&quot;: &quot;#b58b2a&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Save Final Image&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n1949,<br>\\n31,<br>\\n483,<br>\\n199<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n}<br>\\n],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 1,<br>\\n&quot;offset&quot;: [<br>\\n79.7296113866837,<br>\\n-337.5535555323909<br>\\n]<br>\\n},<br>\\n&quot;0246.VERSION&quot;: [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/1. Latent放大工作流.json","value":{"title":"1. Latent放大工作流.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/1. Latent放大工作流.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,p as data};

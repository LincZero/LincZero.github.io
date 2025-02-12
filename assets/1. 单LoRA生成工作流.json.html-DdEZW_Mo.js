import{_ as e,c as o,b as t,o as s,r as l}from"./app-DnpufS1x.js";const a={};function i(p,d){const n=l("VueFlow");return s(),o("div",null,[t(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 11,
  "last_link_id": 14,
  "nodes": [
    {
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 863,
        "1": 186
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
          "link": 14,
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
        156680208700286,
        "randomize",
        20,
        8,
        "euler",
        "normal",
        1
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1209,
        "1": 188
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
          "link": 7,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 8,
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
      },
      "widgets_values": []
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1451,
        "1": 189
      },
      "size": {
        "0": 210,
        "1": 58
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9,
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
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": -290,
        "1": 450
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
            10
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            11
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            8
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
      "id": 10,
      "type": "LoraLoader",
      "pos": {
        "0": 60,
        "1": 430
      },
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 10,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 11,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            14
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            12,
            13
          ],
          "slot_index": 1,
          "shape": 3,
          "label": "CLIP"
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "ganyu_ned2_offset.safetensors",
        1,
        1
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 415,
        "1": 186
      },
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 12,
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
        "sfw, ganyu \\\\(genshin impact\\\\), 1girl, ahoge, architecture, bangs, bare shoulders, bell, black gloves, black pantyhose, ((blue hair)), blush, breasts, chinese knot, detached sleeves, east asian architecture, flower knot, gloves, horns, long hair, looking at viewer, neck bell, night, outdoors, pantyhose, purple eyes, sidelocks, solo, tassel,  white sleeves, ((masterpiece))"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 413,
        "1": 389
      },
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
          "link": 13,
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
        "worst quality, ugly, blurry,"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": {
        "0": 473,
        "1": 609
      },
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 1,
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
      "id": 11,
      "type": "Note",
      "pos": {
        "0": -824,
        "1": 126
      },
      "size": [
        520.2853334580624,
        738.9541604871242
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "# 附加网络 (Additional Network)\\n\\n是一个比较笼统的称呼，指SD生成中附加在最大的模型 (Checkpoint) 上的一些其他辅助性质的小模型\\n\\n这些小模型的分类和作用：最常使用的三类：\\n\\n- 词嵌入 (Embeddings)\\n- LoRA\\n- ControlNet\\n\\n作用：提高生图质量、创作独特风格、精准控制画面\\n\\n## 词嵌入 (Embeddings)\\n\\n使用最简单的是Embedding，按 \`Embedding:+模型名(不包含后缀)\` 的形式填入提示词\\n如果开启了 Custom Scripts，可以方便地辅助输入该功能\\n\\n## LoRA\\n\\n与SD WebUI不同：\\n\\n> 在SD WebUI中，可以用和Embedding类型的方式置入提示词中，如 \`<lora:A-> Pixel_f2:1>\`\\n> \\n> 但在ComfyUI中不行！\\n> \\n> 原因：Embedding本质上是一系列提示词向量的“合集”，而LoRA则是一组经过再训练的、从大模型上“提炼”出来的“附加权重”\\n\\n使用：\\n\\n- 使用LoRA加载器节点，放在Checkpoint Loader节点的后面\\n- 多个LoRA节点：直接串联他们就行了\\n\\n原理：\\n\\n- 可以将LoRA视做附加在主模型上的小模型，可以将checkpoint与后面被附加LoRA的部分视作一个“新的模型”\\n\\n要项：\\n\\n- strength_model、strength_clip 是LoRA的权重\\n  - 与WebUI不同：这里是两个权重，而WebUI里只有一个\\n  - 原因：LoRA训练时同时在底模的文本编码器 (CLIP Text Encoder) 和噪声预测器 (主模型UNet)上都做了训练，这两个部分都有对应的 “经验积累”\\n  - 区别：例如 \`Blindbox LoRA\` 可以把普通插画风格作品变成带PVC盲盒手办的质感的3D渲染图\\n    我们可以拉一张 **XY对比图**，展示两个权重在不同水平下的组合(图略，见原视频)。结果：\\n    - 模型强度：(图上看起来影响较大) 直接地影响了LoRA的风格 (形象) 是否能被植入到主模型中，因为作用的是主管去噪的UNet部分\\n    - CLIP强度：(图上看起来影响较小) 影响模型对一些提示词的相应结果，在一些具有大量触发词的LoRA里的作用会更显著\\n   - 值建议：当哪不准时，可以设置相同的值。根据作者的说法，二者相等时，差不多就是在WebUI里设置 \`<lora:lucy_(cyberpunk)_v10:0.5>\` 的效果\\n- 多LoRA使用\\n  可以使用有Stack功能的节点实现批量加载，例如 \`LoRA Stack\`、\`CR LoRA Stack\`，这个节点也能很好地与Efficient Loader节点配合。\\n  很方便，但是这种方式也会有一些“局限性”。例如输出类型是 \`LORA_STACK\`，只能和Efficient Loader节点配合\\n  \\n\\n"
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
      8,
      4,
      2,
      8,
      1,
      "VAE"
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
      4,
      0,
      10,
      0,
      "MODEL"
    ],
    [
      11,
      4,
      1,
      10,
      1,
      "CLIP"
    ],
    [
      12,
      10,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      13,
      10,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      14,
      10,
      0,
      3,
      0,
      "MODEL"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1.4420993610649966,
      "offset": [
        985.3597920720198,
        -54.74646922678285
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
`})])}const m=e(a,[["render",i],["__file","1. 单LoRA生成工作流.json.html.vue"]]),L=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/1.%20%E5%8D%95LoRA%E7%94%9F%E6%88%90%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html","title":"1. 单LoRA生成工作流.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 11, \\"last_link_id\\": 14, \\"nodes\\": [ { \\"id\\": 3, \\"type\\": \\"KSampler\\", \\"pos\\": { \\"0\\": 863, \\"1\\": 186 }, \\"size\\": { \\"0\\": 315, \\"1\\": 262 }, \\"flags\\": {}, \\"order\\": 6, \\"mode...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/1.%20%E5%8D%95LoRA%E7%94%9F%E6%88%90%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 11, \\"last_link_id\\": 14, \\"nodes\\": [ { \\"id\\": 3, \\"type\\": \\"KSampler\\", \\"pos\\": { \\"0\\": 863, \\"1\\": 186 }, \\"size\\": { \\"0\\": 315, \\"1\\": 262 }, \\"flags\\": {}, \\"order\\": 6, \\"mode..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":4.4,"words":1320},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/1. 单LoRA生成工作流.json","excerpt":"<p>{\\n\\"last_node_id\\": 11,\\n\\"last_link_id\\": 14,\\n\\"nodes\\": [\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 863,\\n\\"1\\": 186\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 14,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n156680208700286,\\n\\"randomize\\",\\n20,\\n8,\\n\\"euler\\",\\n\\"normal\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1209,\\n\\"1\\": 188\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 8,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n9\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1451,\\n\\"1\\": 189\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 9,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": -290,\\n\\"1\\": 450\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n10\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n11\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n8\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"AWPainting_v1.3.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": {\\n\\"0\\": 60,\\n\\"1\\": 430\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 126\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 10,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 11,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n14\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n12,\\n13\\n],\\n\\"slot_index\\": 1,\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"ganyu_ned2_offset.safetensors\\",\\n1,\\n1\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 415,\\n\\"1\\": 186\\n},\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 12,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"sfw, ganyu \\\\(genshin impact\\\\), 1girl, ahoge, architecture, bangs, bare shoulders, bell, black gloves, black pantyhose, ((blue hair)), blush, breasts, chinese knot, detached sleeves, east asian architecture, flower knot, gloves, horns, long hair, looking at viewer, neck bell, night, outdoors, pantyhose, purple eyes, sidelocks, solo, tassel,  white sleeves, ((masterpiece))\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 413,\\n\\"1\\": 389\\n},\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 13,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"worst quality, ugly, blurry,\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": {\\n\\"0\\": 473,\\n\\"1\\": 609\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n512,\\n768,\\n1\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": {\\n\\"0\\": -824,\\n\\"1\\": 126\\n},\\n\\"size\\": [\\n520.2853334580624,\\n738.9541604871242\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"# 附加网络 (Additional Network)\\\\n\\\\n是一个比较笼统的称呼，指SD生成中附加在最大的模型 (Checkpoint) 上的一些其他辅助性质的小模型\\\\n\\\\n这些小模型的分类和作用：最常使用的三类：\\\\n\\\\n- 词嵌入 (Embeddings)\\\\n- LoRA\\\\n- ControlNet\\\\n\\\\n作用：提高生图质量、创作独特风格、精准控制画面\\\\n\\\\n## 词嵌入 (Embeddings)\\\\n\\\\n使用最简单的是Embedding，按 <code>Embedding:+模型名(不包含后缀)</code> 的形式填入提示词\\\\n如果开启了 Custom Scripts，可以方便地辅助输入该功能\\\\n\\\\n## LoRA\\\\n\\\\n与SD WebUI不同：\\\\n\\\\n&gt; 在SD WebUI中，可以用和Embedding类型的方式置入提示词中，如 <code>&lt;lora:A-&gt; Pixel_f2:1&gt;</code>\\\\n&gt; \\\\n&gt; 但在ComfyUI中不行！\\\\n&gt; \\\\n&gt; 原因：Embedding本质上是一系列提示词向量的“合集”，而LoRA则是一组经过再训练的、从大模型上“提炼”出来的“附加权重”\\\\n\\\\n使用：\\\\n\\\\n- 使用LoRA加载器节点，放在Checkpoint Loader节点的后面\\\\n- 多个LoRA节点：直接串联他们就行了\\\\n\\\\n原理：\\\\n\\\\n- 可以将LoRA视做附加在主模型上的小模型，可以将checkpoint与后面被附加LoRA的部分视作一个“新的模型”\\\\n\\\\n要项：\\\\n\\\\n- strength_model、strength_clip 是LoRA的权重\\\\n  - 与WebUI不同：这里是两个权重，而WebUI里只有一个\\\\n  - 原因：LoRA训练时同时在底模的文本编码器 (CLIP Text Encoder) 和噪声预测器 (主模型UNet)上都做了训练，这两个部分都有对应的 “经验积累”\\\\n  - 区别：例如 <code>Blindbox LoRA</code> 可以把普通插画风格作品变成带PVC盲盒手办的质感的3D渲染图\\\\n    我们可以拉一张 <strong>XY对比图</strong>，展示两个权重在不同水平下的组合(图略，见原视频)。结果：\\\\n    - 模型强度：(图上看起来影响较大) 直接地影响了LoRA的风格 (形象) 是否能被植入到主模型中，因为作用的是主管去噪的UNet部分\\\\n    - CLIP强度：(图上看起来影响较小) 影响模型对一些提示词的相应结果，在一些具有大量触发词的LoRA里的作用会更显著\\\\n   - 值建议：当哪不准时，可以设置相同的值。根据作者的说法，二者相等时，差不多就是在WebUI里设置 <code>&lt;lora:lucy_(cyberpunk)_v10:0.5&gt;</code> 的效果\\\\n- 多LoRA使用\\\\n  可以使用有Stack功能的节点实现批量加载，例如 <code>LoRA Stack</code>、<code>CR LoRA Stack</code>，这个节点也能很好地与Efficient Loader节点配合。\\\\n  很方便，但是这种方式也会有一些“局限性”。例如输出类型是 <code>LORA_STACK</code>，只能和Efficient Loader节点配合\\\\n  \\\\n\\\\n\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n8,\\n4,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n9,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n10,\\n4,\\n0,\\n10,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n11,\\n4,\\n1,\\n10,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n12,\\n10,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n13,\\n10,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n14,\\n10,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 1.4420993610649966,\\n\\"offset\\": [\\n985.3597920720198,\\n-54.74646922678285\\n]\\n},\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/1. 单LoRA生成工作流.json","value":{"title":"1. 单LoRA生成工作流.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/1. 单LoRA生成工作流.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,L as data};

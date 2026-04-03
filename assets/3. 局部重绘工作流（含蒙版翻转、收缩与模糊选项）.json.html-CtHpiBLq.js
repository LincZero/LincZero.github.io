import{_ as t,c as o,b as u,r as q,o as r}from"./app-evNTgste.js";const b={};function e(s,a){const n=q("VueFlow");return r(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 59,
  "last_link_id": 131,
  "nodes": [
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 350,
        "1": 410
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
      "pos": {
        "0": 1260,
        "1": 150
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 13,
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
      },
      "widgets_values": []
    },
    {
      "id": 29,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": -50,
        "1": 350
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
      "id": 20,
      "type": "LoadImage",
      "pos": {
        "0": 50,
        "1": 680
      },
      "size": {
        "0": 385,
        "1": 365
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
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
          "links": [
            120
          ],
          "slot_index": 1,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "clipspace/clipspace-mask-4488525.6.png [input]",
        "image"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 350,
        "1": 200
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
        "1boy, upper body, from below, blurry background, depth of field, scenery, outdoors, sky,glimmer, sky, scenery, no humans, cloud, outdoors, morning,dappled_sunlight, , forest, mountains, horizon"
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1260,
        "1": 240
      },
      "size": {
        "0": 340,
        "1": 350
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 22,
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
      "id": 34,
      "type": "VAEEncode",
      "pos": {
        "0": 500,
        "1": 990
      },
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
          "slot_index": 0,
          "shape": 3,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      },
      "widgets_values": []
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 940,
        "1": 150
      },
      "size": {
        "0": 300,
        "1": 440
      },
      "flags": {},
      "order": 11,
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
        50186755567090,
        "randomize",
        30,
        8,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 33,
      "type": "SetLatentNoiseMask",
      "pos": {
        "0": 1410,
        "1": 800
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 9,
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
          "slot_index": 0,
          "shape": 3,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "SetLatentNoiseMask"
      },
      "widgets_values": []
    },
    {
      "id": 50,
      "type": "InvertMask",
      "pos": {
        "0": 500,
        "1": 820
      },
      "size": {
        "0": 210,
        "1": 26
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 120,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            127
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "InvertMask"
      },
      "widgets_values": []
    },
    {
      "id": 55,
      "type": "Mask Erode Region",
      "pos": {
        "0": 740,
        "1": 810
      },
      "size": {
        "0": 210,
        "1": 60
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "masks",
          "type": "MASK",
          "link": 127,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "MASKS",
          "type": "MASK",
          "links": [
            128
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "Mask Erode Region"
      },
      "widgets_values": [
        5
      ]
    },
    {
      "id": 56,
      "type": "ImpactGaussianBlurMask",
      "pos": {
        "0": 1000,
        "1": 790
      },
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 128,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            129,
            130
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "ImpactGaussianBlurMask"
      },
      "widgets_values": [
        10,
        10
      ]
    },
    {
      "id": 57,
      "type": "MaskToImage",
      "pos": {
        "0": 1360,
        "1": 910
      },
      "size": {
        "0": 210,
        "1": 26
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 130,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            131
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "MaskToImage"
      },
      "widgets_values": []
    },
    {
      "id": 58,
      "type": "SaveImage",
      "pos": {
        "0": 1730.1741943359375,
        "1": 690.9093627929688
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 131,
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
      "id": 59,
      "type": "Note",
      "pos": {
        "0": -627,
        "1": 183
      },
      "size": [
        553.1327768373346,
        915.3806459177281
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "# 局部重绘\\n\\n## WebUI中的操作\\n\\n在 WebUI 中，我们可以通过画布在上传的图片上涂抹/上传蒙版图来确定一块区域进行重绘\\n\\n一般来说，白色是1(需要被操作)黑色是0(不动)\\n\\n## ComfyUI中的操作\\n\\n在作者提供的工作流示例中，也有提供：Inpaint文件夹。或者其他更多的工作流方法\\n\\n### 重绘编码器版本\\n\\n核心\\n\\n- 蒙版的设置\\n  蒙版的位置比较隐蔽，在加载图像节点上右键 > 在蒙版(遮罩)编辑器里打开 (Open in MaskEditor)，在里面可以编辑蒙版\\n- VAE内补编码器\\n  这个本质也是VAE编码节点，不过这个是专门用于重绘的。用这个代替之前的普通版本的VAE编码节点\\n- 后面的流程同普通图生图\\n\\n要项、原理\\n\\n- 重绘强度（去噪强度），建议0.8\\n  太低了容易生成纯白色块（原理上，加了遮罩后，遮罩的部分是白色图像，以对应“空白”的潜空间）\\n  太高了容易完全重绘，与原图没关系\\n\\n### 潜空间噪声蒙版版本\\n\\n上一个版本重绘强度不能太低，那如何使用**更小的重绘强度**？\\n\\n- 将VAE内补编码器替换成先连 \`VAE Encode\` (VAE编码) 再连 \`SetLatentNoiseMask\` (设置Latent澡波遮罩) 节点\\n\\n核心\\n\\n- 设置Latent澡波遮罩：将指定区域像素信息转为潜空间数据以后再做重新采样\\n\\n原理\\n\\n- 简单来说：\\n  第一个版本，相当于将遮罩部分抠下来，做一次文生图。\\n  而这个版本，相当于将遮罩部分抠下来，做一次图生图。\\n- 对应SD WebUI，局部重绘有不同的模式，可以切换为 “填充/原版/潜空间噪声/空白潜空间”\\n  默认的是 “原图” 模式，对应的就是这里的方式\\n  而 “空白潜空间” 模式，对应的就是前面说的重绘编码器版本\\n\\n### 含蒙版翻转、收缩、模糊选项\\n\\n无论是手涂还是智能识别生成的蒙版，蒙版边缘容易存在精度不足、过渡生硬的问题。\\n所以我们可能需要对蒙版进行二次处理。\\n\\n在SD WebUI中，有 “柔和重绘” 这种东西。在ComfyUI里，他们被分散到一些对应功能的节点。比较常见的有：\\n\\n- 扩展 (Grow)，蒙版向外延展，同ps。\\n  如果用的是 \`VAE Encode (for Inpainting)\` 节点，本身就有这个选项\\n  否则在两个mask handle之间增加一个 \`Grow Mask\` 节点\\n- 收缩。\\n  扩展节点不支持收缩，需要使用自定义节点。如 \`WAS节点包\` 里的 \`Erode Mask\` (腐蚀蒙版)\\n- 边缘模糊，即ps里的边缘羽化\\n  可以增加重绘区域与非重绘区域之间的柔和过度。\\n  有个不好用的：\`FeatherMask\`，但这个只能羽化整个图片边缘\\n  需要节点包：\`Impact Pack、Essentials\` 里的蒙版模糊 (Mask Blur)，用关键词Blur搜\\n- 蒙版反转 (Invert)\\n  自带节点和 \`WAS节点包\` 里都有这个功能\\n- 显示蒙版\\n  如果好奇处理后的蒙版长什么样子，可以使用 \`Convert Mask to Image\` + \`Preview Image\` 节点来显示 (不需要 \`Save Image\`，那个会自动保存)\\n\\n### 上传蒙版版本\\n\\n"
      ],
      "color": "#432",
      "bgcolor": "#653"
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
      120,
      20,
      1,
      50,
      0,
      "MASK"
    ],
    [
      127,
      50,
      0,
      55,
      0,
      "MASK"
    ],
    [
      128,
      55,
      0,
      56,
      0,
      "MASK"
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
      130,
      56,
      0,
      57,
      0,
      "MASK"
    ],
    [
      131,
      57,
      0,
      58,
      0,
      "IMAGE"
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
      "flags": {}
    }
  ],
  "config": {},
  "extra": {
    "0246.VERSION": [
      0,
      0,
      4
    ],
    "ds": {
      "scale": 1.1918176537727243,
      "offset": [
        816.4304812235899,
        -123.9027211948917
      ]
    }
  },
  "version": 0.4
}
`})])}const i=t(b,[["render",e]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/3.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E5%90%AB%E8%92%99%E7%89%88%E7%BF%BB%E8%BD%AC%E3%80%81%E6%94%B6%E7%BC%A9%E4%B8%8E%E6%A8%A1%E7%B3%8A%E9%80%89%E9%A1%B9%EF%BC%89.json.html","title":"3. 局部重绘工作流（含蒙版翻转、收缩与模糊选项）.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 59, &quot;last_link_id&quot;: 131, &quot;nodes&quot;: [ { &quot;id&quot;: 7, &quot;type&quot;: &quot;CLIPTextEncode&quot;, &quot;pos&quot;: { &quot;0...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/3.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E5%90%AB%E8%92%99%E7%89%88%E7%BF%BB%E8%BD%AC%E3%80%81%E6%94%B6%E7%BC%A9%E4%B8%8E%E6%A8%A1%E7%B3%8A%E9%80%89%E9%A1%B9%EF%BC%89.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 59, &quot;last_link_id&quot;: 131, &quot;nodes&quot;: [ { &quot;id&quot;: 7, &quot;type&quot;: &quot;CLIPTextEncode&quot;, &quot;pos&quot;: { &quot;0..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":6.2,"words":1860},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/3. 局部重绘工作流（含蒙版翻转、收缩与模糊选项）.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 59,<br>\\n&quot;last_link_id&quot;: 131,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 350,<br>\\n&quot;1&quot;: 410<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 425.27801513671875,<br>\\n&quot;1&quot;: 180.6060791015625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 82,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n6<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;nsfw, (worst quality), (low quality), (normal quality), &quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1260,<br>\\n&quot;1&quot;: 150<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 42,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 84,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n22<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 29,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: -50,<br>\\n&quot;1&quot;: 350<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n80<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n81,<br>\\n82<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n84,<br>\\n89<br>\\n],<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;AWPainting_v1.3.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 20,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 50,<br>\\n&quot;1&quot;: 680<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 385,<br>\\n&quot;1&quot;: 365<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n88<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n120<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;clipspace/clipspace-mask-4488525.6.png [input]&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 350,<br>\\n&quot;1&quot;: 200<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 422.84503173828125,<br>\\n&quot;1&quot;: 164.31304931640625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 81,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n4<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;1boy, upper body, from below, blurry background, depth of field, scenery, outdoors, sky,glimmer, sky, scenery, no humans, cloud, outdoors, morning,dappled_sunlight, , forest, mountains, horizon&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 9,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1260,<br>\\n&quot;1&quot;: 240<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 340,<br>\\n&quot;1&quot;: 350<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 22,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 34,<br>\\n&quot;type&quot;: &quot;VAEEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 500,<br>\\n&quot;1&quot;: 990<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;pixels&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 88,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 89,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n91<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 940,<br>\\n&quot;1&quot;: 150<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 300,<br>\\n&quot;1&quot;: 440<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 80,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 4,<br>\\n&quot;label&quot;: &quot;正面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 6,<br>\\n&quot;label&quot;: &quot;负面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 92,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n42<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n50186755567090,<br>\\n&quot;randomize&quot;,<br>\\n30,<br>\\n8,<br>\\n&quot;dpmpp_2m&quot;,<br>\\n&quot;karras&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 33,<br>\\n&quot;type&quot;: &quot;SetLatentNoiseMask&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1410,<br>\\n&quot;1&quot;: 800<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 91,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 129,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n92<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SetLatentNoiseMask&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 50,<br>\\n&quot;type&quot;: &quot;InvertMask&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 500,<br>\\n&quot;1&quot;: 820<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 26<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 120,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n127<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;InvertMask&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 55,<br>\\n&quot;type&quot;: &quot;Mask Erode Region&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 740,<br>\\n&quot;1&quot;: 810<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;masks&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 127,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MASKS&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n128<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;Mask Erode Region&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n5<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 56,<br>\\n&quot;type&quot;: &quot;ImpactGaussianBlurMask&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1000,<br>\\n&quot;1&quot;: 790<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 82<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 128,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n129,<br>\\n130<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImpactGaussianBlurMask&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n10,<br>\\n10<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 57,<br>\\n&quot;type&quot;: &quot;MaskToImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1360,<br>\\n&quot;1&quot;: 910<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 26<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 130,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n131<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;MaskToImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 58,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1730.1741943359375,<br>\\n&quot;1&quot;: 690.9093627929688<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 131,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 59,<br>\\n&quot;type&quot;: &quot;Note&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: -627,<br>\\n&quot;1&quot;: 183<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n553.1327768373346,<br>\\n915.3806459177281<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;# 局部重绘\\\\n\\\\n## WebUI中的操作\\\\n\\\\n在 WebUI 中，我们可以通过画布在上传的图片上涂抹/上传蒙版图来确定一块区域进行重绘\\\\n\\\\n一般来说，白色是1(需要被操作)黑色是0(不动)\\\\n\\\\n## ComfyUI中的操作\\\\n\\\\n在作者提供的工作流示例中，也有提供：Inpaint文件夹。或者其他更多的工作流方法\\\\n\\\\n### 重绘编码器版本\\\\n\\\\n核心\\\\n\\\\n- 蒙版的设置\\\\n  蒙版的位置比较隐蔽，在加载图像节点上右键 &gt; 在蒙版(遮罩)编辑器里打开 (Open in MaskEditor)，在里面可以编辑蒙版\\\\n- VAE内补编码器\\\\n  这个本质也是VAE编码节点，不过这个是专门用于重绘的。用这个代替之前的普通版本的VAE编码节点\\\\n- 后面的流程同普通图生图\\\\n\\\\n要项、原理\\\\n\\\\n- 重绘强度（去噪强度），建议0.8\\\\n  太低了容易生成纯白色块（原理上，加了遮罩后，遮罩的部分是白色图像，以对应“空白”的潜空间）\\\\n  太高了容易完全重绘，与原图没关系\\\\n\\\\n### 潜空间噪声蒙版版本\\\\n\\\\n上一个版本重绘强度不能太低，那如何使用<strong>更小的重绘强度</strong>？\\\\n\\\\n- 将VAE内补编码器替换成先连 <code>VAE Encode</code> (VAE编码) 再连 <code>SetLatentNoiseMask</code> (设置Latent澡波遮罩) 节点\\\\n\\\\n核心\\\\n\\\\n- 设置Latent澡波遮罩：将指定区域像素信息转为潜空间数据以后再做重新采样\\\\n\\\\n原理\\\\n\\\\n- 简单来说：\\\\n  第一个版本，相当于将遮罩部分抠下来，做一次文生图。\\\\n  而这个版本，相当于将遮罩部分抠下来，做一次图生图。\\\\n- 对应SD WebUI，局部重绘有不同的模式，可以切换为 “填充/原版/潜空间噪声/空白潜空间”\\\\n  默认的是 “原图” 模式，对应的就是这里的方式\\\\n  而 “空白潜空间” 模式，对应的就是前面说的重绘编码器版本\\\\n\\\\n### 含蒙版翻转、收缩、模糊选项\\\\n\\\\n无论是手涂还是智能识别生成的蒙版，蒙版边缘容易存在精度不足、过渡生硬的问题。\\\\n所以我们可能需要对蒙版进行二次处理。\\\\n\\\\n在SD WebUI中，有 “柔和重绘” 这种东西。在ComfyUI里，他们被分散到一些对应功能的节点。比较常见的有：\\\\n\\\\n- 扩展 (Grow)，蒙版向外延展，同ps。\\\\n  如果用的是 <code>VAE Encode (for Inpainting)</code> 节点，本身就有这个选项\\\\n  否则在两个mask handle之间增加一个 <code>Grow Mask</code> 节点\\\\n- 收缩。\\\\n  扩展节点不支持收缩，需要使用自定义节点。如 <code>WAS节点包</code> 里的 <code>Erode Mask</code> (腐蚀蒙版)\\\\n- 边缘模糊，即ps里的边缘羽化\\\\n  可以增加重绘区域与非重绘区域之间的柔和过度。\\\\n  有个不好用的：<code>FeatherMask</code>，但这个只能羽化整个图片边缘\\\\n  需要节点包：<code>Impact Pack、Essentials</code> 里的蒙版模糊 (Mask Blur)，用关键词Blur搜\\\\n- 蒙版反转 (Invert)\\\\n  自带节点和 <code>WAS节点包</code> 里都有这个功能\\\\n- 显示蒙版\\\\n  如果好奇处理后的蒙版长什么样子，可以使用 <code>Convert Mask to Image</code> + <code>Preview Image</code> 节点来显示 (不需要 <code>Save Image</code>，那个会自动保存)\\\\n\\\\n### 上传蒙版版本\\\\n\\\\n&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n4,<br>\\n6,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n22,<br>\\n8,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n42,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n80,<br>\\n29,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n81,<br>\\n29,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n82,<br>\\n29,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n84,<br>\\n29,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n88,<br>\\n20,<br>\\n0,<br>\\n34,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n89,<br>\\n29,<br>\\n2,<br>\\n34,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n91,<br>\\n34,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n92,<br>\\n33,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n120,<br>\\n20,<br>\\n1,<br>\\n50,<br>\\n0,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n127,<br>\\n50,<br>\\n0,<br>\\n55,<br>\\n0,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n128,<br>\\n55,<br>\\n0,<br>\\n56,<br>\\n0,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n129,<br>\\n56,<br>\\n0,<br>\\n33,<br>\\n1,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n130,<br>\\n56,<br>\\n0,<br>\\n57,<br>\\n0,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n131,<br>\\n57,<br>\\n0,<br>\\n58,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [<br>\\n{<br>\\n&quot;title&quot;: &quot;Load image and alpha mask for inpainting&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n-20,<br>\\n607,<br>\\n1677,<br>\\n465<br>\\n],<br>\\n&quot;color&quot;: &quot;#8A8&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n}<br>\\n],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;0246.VERSION&quot;: [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n],<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 1.1918176537727243,<br>\\n&quot;offset&quot;: [<br>\\n816.4304812235899,<br>\\n-123.9027211948917<br>\\n]<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/3. 局部重绘工作流（含蒙版翻转、收缩与模糊选项）.json","value":{"title":"3. 局部重绘工作流（含蒙版翻转、收缩与模糊选项）.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/3. 局部重绘工作流（含蒙版翻转、收缩与模糊选项）.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,p as data};

import{_ as e,c as t,b as o,o as a,r as s}from"./app-xgHpiPmZ.js";const l={};function i(p,d){const n=s("VueFlow");return a(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 37,
  "last_link_id": 94,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1170,
        "1": 390
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
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1170,
        "1": 480
      },
      "size": {
        "0": 390,
        "1": 400
      },
      "flags": {},
      "order": 10,
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
            90
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "majicmixLux_v3.safetensors"
      ]
    },
    {
      "id": 35,
      "type": "VAEEncode",
      "pos": {
        "0": 487.0909118652344,
        "1": 860.6363525390625
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
          "link": 89,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 90,
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
      "id": 33,
      "type": "SetLatentNoiseMask",
      "pos": {
        "0": 550,
        "1": 710
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
          "link": 91,
          "label": "Latent"
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 92,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            93
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
            89,
            94
          ],
          "slot_index": 0,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            92
          ],
          "slot_index": 1,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "clipspace/clipspace-mask-235017.40000000037.png [input]",
        "image"
      ]
    },
    {
      "id": 36,
      "type": "PreviewImage",
      "pos": {
        "0": 810,
        "1": 810
      },
      "size": {
        "0": 320,
        "1": 210
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 94,
          "label": "图像"
        }
      ],
      "outputs": [],
      "properties": {
        "Node name for S&R": "PreviewImage"
      },
      "widgets_values": []
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 810,
        "1": 300
      },
      "size": {
        "0": 320,
        "1": 470
      },
      "flags": {},
      "order": 8,
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
          "link": 93,
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
        120385346292200,
        "randomize",
        21,
        8,
        "dpmpp_2m",
        "normal",
        0.5
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
        "masterpiece, best quality, 1girl, (bright yellow dress:1.2),(upper body:1.1), grassland, outdoors, sitting on the grass,"
      ]
    },
    {
      "id": 37,
      "type": "Note",
      "pos": {
        "0": -557,
        "1": 213
      },
      "size": {
        "0": 482.1575012207031,
        "1": 833.2864990234375
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "# 局部重绘\\n\\n## WebUI中的操作\\n\\n在 WebUI 中，我们可以通过画布在上传的图片上涂抹/上传蒙版图来确定一块区域进行重绘\\n\\n一般来说，白色是1(需要被操作)黑色是0(不动)\\n\\n## ComfyUI中的操作\\n\\n在作者提供的工作流示例中，也有提供：Inpaint文件夹。或者其他更多的工作流方法\\n\\n### 重绘编码器版本\\n\\n核心\\n\\n- 蒙版的设置\\n  蒙版的位置比较隐蔽，在加载图像节点上右键 > 在蒙版(遮罩)编辑器里打开 (Open in MaskEditor)，在里面可以编辑蒙版\\n- VAE内补编码器\\n  这个本质也是VAE编码节点，不过这个是专门用于重绘的。用这个代替之前的普通版本的VAE编码节点\\n- 后面的流程同普通图生图\\n\\n要项、原理\\n\\n- 重绘强度（去噪强度），建议0.8\\n  太低了容易生成纯白色块（原理上，加了遮罩后，遮罩的部分是白色图像，以对应“空白”的潜空间）\\n  太高了容易完全重绘，与原图没关系\\n\\n### 潜空间噪声蒙版版本\\n\\n上一个版本重绘强度不能太低，那如何使用**更小的重绘强度**？\\n\\n- 将VAE内补编码器替换成先连 \`VAE Encode\` (VAE编码) 再连 \`SetLatentNoiseMask\` (设置Latent澡波遮罩) 节点\\n\\n核心\\n\\n- 设置Latent澡波遮罩：将指定区域像素信息转为潜空间数据以后再做重新采样\\n\\n原理\\n\\n- 简单来说：\\n  第一个版本，相当于将遮罩部分抠下来，做一次文生图。\\n  而这个版本，相当于将遮罩部分抠下来，做一次图生图。\\n- 对应SD WebUI，局部重绘有不同的模式，可以切换为 “填充/原版/潜空间噪声/空白潜空间”\\n  默认的是 “原图” 模式，对应的就是这里的方式\\n  而 “空白潜空间” 模式，对应的就是前面说的重绘编码器版本\\n\\n### 含蒙版翻转、收缩、模糊选项\\n\\n无论是手涂还是智能识别生成的蒙版，蒙版边缘容易存在精度不足、过渡生硬的问题。\\n所以我们可能需要对蒙版进行二次处理。\\n\\n在SD WebUI中，有 “柔和重绘” 这种东西。在ComfyUI里，他们被分散到一些对应功能的节点。比较常见的有：\\n\\n- 扩展 (Grow)，蒙版向外延展，同ps。\\n  如果用的是 \`VAE Encode (for Inpainting)\` 节点，本身就有这个选项\\n  否则在两个mask handle之间增加一个 \`Grow Mask\` 节点\\n- 收缩。\\n  扩展节点不支持收缩，需要使用自定义节点。如 \`WAS节点包\` 里的 \`Erode Mask\` (腐蚀蒙版)\\n- 边缘模糊，即ps里的边缘羽化\\n  可以增加重绘区域与非重绘区域之间的柔和过度。\\n  有个不好用的：\`FeatherMask\`，但这个只能羽化整个图片边缘\\n  需要节点包：\`Impact Pack、Essentials\` 里的蒙版模糊 (Mask Blur)，用关键词Blur搜\\n- 蒙版反转 (Invert)\\n  自带节点和 \`WAS节点包\` 里都有这个功能\\n- 显示蒙版\\n  如果好奇处理后的蒙版长什么样子，可以使用 \`Convert Mask to Image\` + \`Save Image\` 节点来显示\\n\\n### 上传蒙版版本\\n\\n"
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
      89,
      20,
      0,
      35,
      0,
      "IMAGE"
    ],
    [
      90,
      29,
      2,
      35,
      1,
      "VAE"
    ],
    [
      91,
      35,
      0,
      33,
      0,
      "LATENT"
    ],
    [
      92,
      20,
      1,
      33,
      1,
      "MASK"
    ],
    [
      93,
      33,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      94,
      20,
      0,
      36,
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
        786,
        442
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    }
  ],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1.191817653772724,
      "offset": [
        733.2524400715455,
        -131.26574933878877
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
`})])}const m=e(l,[["render",i],["__file","2. 局部重绘工作流（潜空间噪声蒙版版本）.json.html.vue"]]),E=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%BD%9C%E7%A9%BA%E9%97%B4%E5%99%AA%E5%A3%B0%E8%92%99%E7%89%88%E7%89%88%E6%9C%AC%EF%BC%89.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 37, \\"last_link_id\\": 94, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1170, \\"1\\": 390 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"flags\\": {}, \\"order\\": 9, \\"mod...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%BD%9C%E7%A9%BA%E9%97%B4%E5%99%AA%E5%A3%B0%E8%92%99%E7%89%88%E7%89%88%E6%9C%AC%EF%BC%89.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 37, \\"last_link_id\\": 94, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1170, \\"1\\": 390 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"flags\\": {}, \\"order\\": 9, \\"mod..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.37,"words":1612},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/2. 局部重绘工作流（潜空间噪声蒙版版本）.json","excerpt":"<p>{\\n\\"last_node_id\\": 37,\\n\\"last_link_id\\": 94,\\n\\"nodes\\": [\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1170,\\n\\"1\\": 390\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 42,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 84,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n22\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1170,\\n\\"1\\": 480\\n},\\n\\"size\\": {\\n\\"0\\": 390,\\n\\"1\\": 400\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 22,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 350,\\n\\"1\\": 410\\n},\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 82,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"nsfw, (worst quality), (low quality), (normal quality), \\"\\n]\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": -50,\\n\\"1\\": 350\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n80\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n81,\\n82\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n84,\\n90\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"majicmixLux_v3.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 35,\\n\\"type\\": \\"VAEEncode\\",\\n\\"pos\\": {\\n\\"0\\": 487.0909118652344,\\n\\"1\\": 860.6363525390625\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 89,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 90,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n91\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 33,\\n\\"type\\": \\"SetLatentNoiseMask\\",\\n\\"pos\\": {\\n\\"0\\": 550,\\n\\"1\\": 710\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 91,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 92,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n93\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SetLatentNoiseMask\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": {\\n\\"0\\": 50,\\n\\"1\\": 680\\n},\\n\\"size\\": {\\n\\"0\\": 385,\\n\\"1\\": 365\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n89,\\n94\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n92\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"clipspace/clipspace-mask-235017.40000000037.png [input]\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 36,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": {\\n\\"0\\": 810,\\n\\"1\\": 810\\n},\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 210\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 94,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 810,\\n\\"1\\": 300\\n},\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 470\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 80,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 93,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n42\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n120385346292200,\\n\\"randomize\\",\\n21,\\n8,\\n\\"dpmpp_2m\\",\\n\\"normal\\",\\n0.5\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 350,\\n\\"1\\": 200\\n},\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 81,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"masterpiece, best quality, 1girl, (bright yellow dress:1.2),(upper body:1.1), grassland, outdoors, sitting on the grass,\\"\\n]\\n},\\n{\\n\\"id\\": 37,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": {\\n\\"0\\": -557,\\n\\"1\\": 213\\n},\\n\\"size\\": {\\n\\"0\\": 482.1575012207031,\\n\\"1\\": 833.2864990234375\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"# 局部重绘\\\\n\\\\n## WebUI中的操作\\\\n\\\\n在 WebUI 中，我们可以通过画布在上传的图片上涂抹/上传蒙版图来确定一块区域进行重绘\\\\n\\\\n一般来说，白色是1(需要被操作)黑色是0(不动)\\\\n\\\\n## ComfyUI中的操作\\\\n\\\\n在作者提供的工作流示例中，也有提供：Inpaint文件夹。或者其他更多的工作流方法\\\\n\\\\n### 重绘编码器版本\\\\n\\\\n核心\\\\n\\\\n- 蒙版的设置\\\\n  蒙版的位置比较隐蔽，在加载图像节点上右键 &gt; 在蒙版(遮罩)编辑器里打开 (Open in MaskEditor)，在里面可以编辑蒙版\\\\n- VAE内补编码器\\\\n  这个本质也是VAE编码节点，不过这个是专门用于重绘的。用这个代替之前的普通版本的VAE编码节点\\\\n- 后面的流程同普通图生图\\\\n\\\\n要项、原理\\\\n\\\\n- 重绘强度（去噪强度），建议0.8\\\\n  太低了容易生成纯白色块（原理上，加了遮罩后，遮罩的部分是白色图像，以对应“空白”的潜空间）\\\\n  太高了容易完全重绘，与原图没关系\\\\n\\\\n### 潜空间噪声蒙版版本\\\\n\\\\n上一个版本重绘强度不能太低，那如何使用<strong>更小的重绘强度</strong>？\\\\n\\\\n- 将VAE内补编码器替换成先连 <code>VAE Encode</code> (VAE编码) 再连 <code>SetLatentNoiseMask</code> (设置Latent澡波遮罩) 节点\\\\n\\\\n核心\\\\n\\\\n- 设置Latent澡波遮罩：将指定区域像素信息转为潜空间数据以后再做重新采样\\\\n\\\\n原理\\\\n\\\\n- 简单来说：\\\\n  第一个版本，相当于将遮罩部分抠下来，做一次文生图。\\\\n  而这个版本，相当于将遮罩部分抠下来，做一次图生图。\\\\n- 对应SD WebUI，局部重绘有不同的模式，可以切换为 “填充/原版/潜空间噪声/空白潜空间”\\\\n  默认的是 “原图” 模式，对应的就是这里的方式\\\\n  而 “空白潜空间” 模式，对应的就是前面说的重绘编码器版本\\\\n\\\\n### 含蒙版翻转、收缩、模糊选项\\\\n\\\\n无论是手涂还是智能识别生成的蒙版，蒙版边缘容易存在精度不足、过渡生硬的问题。\\\\n所以我们可能需要对蒙版进行二次处理。\\\\n\\\\n在SD WebUI中，有 “柔和重绘” 这种东西。在ComfyUI里，他们被分散到一些对应功能的节点。比较常见的有：\\\\n\\\\n- 扩展 (Grow)，蒙版向外延展，同ps。\\\\n  如果用的是 <code>VAE Encode (for Inpainting)</code> 节点，本身就有这个选项\\\\n  否则在两个mask handle之间增加一个 <code>Grow Mask</code> 节点\\\\n- 收缩。\\\\n  扩展节点不支持收缩，需要使用自定义节点。如 <code>WAS节点包</code> 里的 <code>Erode Mask</code> (腐蚀蒙版)\\\\n- 边缘模糊，即ps里的边缘羽化\\\\n  可以增加重绘区域与非重绘区域之间的柔和过度。\\\\n  有个不好用的：<code>FeatherMask</code>，但这个只能羽化整个图片边缘\\\\n  需要节点包：<code>Impact Pack、Essentials</code> 里的蒙版模糊 (Mask Blur)，用关键词Blur搜\\\\n- 蒙版反转 (Invert)\\\\n  自带节点和 <code>WAS节点包</code> 里都有这个功能\\\\n- 显示蒙版\\\\n  如果好奇处理后的蒙版长什么样子，可以使用 <code>Convert Mask to Image</code> + <code>Save Image</code> 节点来显示\\\\n\\\\n### 上传蒙版版本\\\\n\\\\n\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n}\\n],\\n\\"links\\": [\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n22,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n42,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n80,\\n29,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n81,\\n29,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n82,\\n29,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n84,\\n29,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n89,\\n20,\\n0,\\n35,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n90,\\n29,\\n2,\\n35,\\n1,\\n\\"VAE\\"\\n],\\n[\\n91,\\n35,\\n0,\\n33,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n92,\\n20,\\n1,\\n33,\\n1,\\n\\"MASK\\"\\n],\\n[\\n93,\\n33,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n94,\\n20,\\n0,\\n36,\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Load image and alpha mask for inpainting\\",\\n\\"bounding\\": [\\n-20,\\n607,\\n786,\\n442\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 1.191817653772724,\\n\\"offset\\": [\\n733.2524400715455,\\n-131.26574933878877\\n]\\n},\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,E as data};

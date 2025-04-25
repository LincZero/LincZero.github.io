import{_ as r,e,h as b,r as t,o}from"./app-DCl3OCfo.js";const s={};function a(l,i){const n=t("VueFlow");return o(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const d=r(s,[["render",a],["__file","2. 局部重绘工作流（潜空间噪声蒙版版本）.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%BD%9C%E7%A9%BA%E9%97%B4%E5%99%AA%E5%A3%B0%E8%92%99%E7%89%88%E7%89%88%E6%9C%AC%EF%BC%89.json.html","title":"2. 局部重绘工作流（潜空间噪声蒙版版本）.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 37, \\"last_link_id\\": 94, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1170, \\"1\\": 390 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"flags\\": {}, \\"order\\": 9, \\"mod...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%BD%9C%E7%A9%BA%E9%97%B4%E5%99%AA%E5%A3%B0%E8%92%99%E7%89%88%E7%89%88%E6%9C%AC%EF%BC%89.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 37, \\"last_link_id\\": 94, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1170, \\"1\\": 390 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"flags\\": {}, \\"order\\": 9, \\"mod..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":5.37,"words":1612},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/2. 局部重绘工作流（潜空间噪声蒙版版本）.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 37,<br>\\n\\"last_link_id\\": 94,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1170,<br>\\n\\"1\\": 390<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 42,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 84,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n22<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 9,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1170,<br>\\n\\"1\\": 480<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 390,<br>\\n\\"1\\": 400<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 22,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 350,<br>\\n\\"1\\": 410<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 425.27801513671875,<br>\\n\\"1\\": 180.6060791015625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 82,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n6<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"nsfw, (worst quality), (low quality), (normal quality), \\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 29,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -50,<br>\\n\\"1\\": 350<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n80<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n81,<br>\\n82<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n84,<br>\\n90<br>\\n],<br>\\n\\"slot_index\\": 2,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"majicmixLux_v3.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 35,<br>\\n\\"type\\": \\"VAEEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 487.0909118652344,<br>\\n\\"1\\": 860.6363525390625<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"pixels\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 89,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 90,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n91<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 33,<br>\\n\\"type\\": \\"SetLatentNoiseMask\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 550,<br>\\n\\"1\\": 710<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 91,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 92,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n93<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SetLatentNoiseMask\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 20,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 50,<br>\\n\\"1\\": 680<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 385,<br>\\n\\"1\\": 365<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n89,<br>\\n94<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n92<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"clipspace/clipspace-mask-235017.40000000037.png [input]\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 36,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 810,<br>\\n\\"1\\": 810<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 210<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 94,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 810,<br>\\n\\"1\\": 300<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 470<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 80,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 4,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 6,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 93,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n42<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n120385346292200,<br>\\n\\"randomize\\",<br>\\n21,<br>\\n8,<br>\\n\\"dpmpp_2m\\",<br>\\n\\"normal\\",<br>\\n0.5<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 350,<br>\\n\\"1\\": 200<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 422.84503173828125,<br>\\n\\"1\\": 164.31304931640625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 81,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n4<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"masterpiece, best quality, 1girl, (bright yellow dress:1.2),(upper body:1.1), grassland, outdoors, sitting on the grass,\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 37,<br>\\n\\"type\\": \\"Note\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -557,<br>\\n\\"1\\": 213<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 482.1575012207031,<br>\\n\\"1\\": 833.2864990234375<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"# 局部重绘\\\\n\\\\n## WebUI中的操作\\\\n\\\\n在 WebUI 中，我们可以通过画布在上传的图片上涂抹/上传蒙版图来确定一块区域进行重绘\\\\n\\\\n一般来说，白色是1(需要被操作)黑色是0(不动)\\\\n\\\\n## ComfyUI中的操作\\\\n\\\\n在作者提供的工作流示例中，也有提供：Inpaint文件夹。或者其他更多的工作流方法\\\\n\\\\n### 重绘编码器版本\\\\n\\\\n核心\\\\n\\\\n- 蒙版的设置\\\\n  蒙版的位置比较隐蔽，在加载图像节点上右键 &gt; 在蒙版(遮罩)编辑器里打开 (Open in MaskEditor)，在里面可以编辑蒙版\\\\n- VAE内补编码器\\\\n  这个本质也是VAE编码节点，不过这个是专门用于重绘的。用这个代替之前的普通版本的VAE编码节点\\\\n- 后面的流程同普通图生图\\\\n\\\\n要项、原理\\\\n\\\\n- 重绘强度（去噪强度），建议0.8\\\\n  太低了容易生成纯白色块（原理上，加了遮罩后，遮罩的部分是白色图像，以对应“空白”的潜空间）\\\\n  太高了容易完全重绘，与原图没关系\\\\n\\\\n### 潜空间噪声蒙版版本\\\\n\\\\n上一个版本重绘强度不能太低，那如何使用<strong>更小的重绘强度</strong>？\\\\n\\\\n- 将VAE内补编码器替换成先连 <code>VAE Encode</code> (VAE编码) 再连 <code>SetLatentNoiseMask</code> (设置Latent澡波遮罩) 节点\\\\n\\\\n核心\\\\n\\\\n- 设置Latent澡波遮罩：将指定区域像素信息转为潜空间数据以后再做重新采样\\\\n\\\\n原理\\\\n\\\\n- 简单来说：\\\\n  第一个版本，相当于将遮罩部分抠下来，做一次文生图。\\\\n  而这个版本，相当于将遮罩部分抠下来，做一次图生图。\\\\n- 对应SD WebUI，局部重绘有不同的模式，可以切换为 “填充/原版/潜空间噪声/空白潜空间”\\\\n  默认的是 “原图” 模式，对应的就是这里的方式\\\\n  而 “空白潜空间” 模式，对应的就是前面说的重绘编码器版本\\\\n\\\\n### 含蒙版翻转、收缩、模糊选项\\\\n\\\\n无论是手涂还是智能识别生成的蒙版，蒙版边缘容易存在精度不足、过渡生硬的问题。\\\\n所以我们可能需要对蒙版进行二次处理。\\\\n\\\\n在SD WebUI中，有 “柔和重绘” 这种东西。在ComfyUI里，他们被分散到一些对应功能的节点。比较常见的有：\\\\n\\\\n- 扩展 (Grow)，蒙版向外延展，同ps。\\\\n  如果用的是 <code>VAE Encode (for Inpainting)</code> 节点，本身就有这个选项\\\\n  否则在两个mask handle之间增加一个 <code>Grow Mask</code> 节点\\\\n- 收缩。\\\\n  扩展节点不支持收缩，需要使用自定义节点。如 <code>WAS节点包</code> 里的 <code>Erode Mask</code> (腐蚀蒙版)\\\\n- 边缘模糊，即ps里的边缘羽化\\\\n  可以增加重绘区域与非重绘区域之间的柔和过度。\\\\n  有个不好用的：<code>FeatherMask</code>，但这个只能羽化整个图片边缘\\\\n  需要节点包：<code>Impact Pack、Essentials</code> 里的蒙版模糊 (Mask Blur)，用关键词Blur搜\\\\n- 蒙版反转 (Invert)\\\\n  自带节点和 <code>WAS节点包</code> 里都有这个功能\\\\n- 显示蒙版\\\\n  如果好奇处理后的蒙版长什么样子，可以使用 <code>Convert Mask to Image</code> + <code>Save Image</code> 节点来显示\\\\n\\\\n### 上传蒙版版本\\\\n\\\\n\\"<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n4,<br>\\n6,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n22,<br>\\n8,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n42,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n80,<br>\\n29,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n81,<br>\\n29,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n82,<br>\\n29,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n84,<br>\\n29,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n89,<br>\\n20,<br>\\n0,<br>\\n35,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n90,<br>\\n29,<br>\\n2,<br>\\n35,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n91,<br>\\n35,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n92,<br>\\n20,<br>\\n1,<br>\\n33,<br>\\n1,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n93,<br>\\n33,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n94,<br>\\n20,<br>\\n0,<br>\\n36,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [<br>\\n{<br>\\n\\"title\\": \\"Load image and alpha mask for inpainting\\",<br>\\n\\"bounding\\": [<br>\\n-20,<br>\\n607,<br>\\n786,<br>\\n442<br>\\n],<br>\\n\\"color\\": \\"#3f789e\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"flags\\": {}<br>\\n}<br>\\n],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 1.191817653772724,<br>\\n\\"offset\\": [<br>\\n733.2524400715455,<br>\\n-131.26574933878877<br>\\n]<br>\\n},<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/2. 局部重绘工作流（潜空间噪声蒙版版本）.json","value":{"title":"2. 局部重绘工作流（潜空间噪声蒙版版本）.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/2. 局部重绘工作流（潜空间噪声蒙版版本）.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

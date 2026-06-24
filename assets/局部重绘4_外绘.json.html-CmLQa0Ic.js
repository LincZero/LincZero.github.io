import{_ as t,c as o,b as u,r as q,o as r}from"./app-k1oQHSab.js";const b={};function e(a,l){const n=q("VueFlow");return r(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 30,
  "last_link_id": 87,
  "nodes": [
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 432,
        "1": 158
      },
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 2,
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
        "outdoors in the yosemite national park mountains nature\\n\\n\\n\\n"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 434,
        "1": 371
      },
      "size": {
        "0": 425.27801513671875,
        "1": 180.6060791015625
      },
      "flags": {},
      "order": 3,
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
        "watermark, text\\n"
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1422,
        "1": 387
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
          "link": 42,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 83,
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
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 940,
        "1": 180
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
          "link": 72,
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
        152545289528694,
        "randomize",
        20,
        8,
        "uni_pc_bh2",
        "normal",
        1
      ]
    },
    {
      "id": 29,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": 17,
        "1": 303
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
            83,
            84
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "512-inpainting-ema.safetensors"
      ]
    },
    {
      "id": 20,
      "type": "LoadImage",
      "pos": {
        "0": -107,
        "1": 726
      },
      "size": {
        "0": 344,
        "1": 346
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
            85
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
        "yosemite_outpaint_example.png",
        "image"
      ]
    },
    {
      "id": 30,
      "type": "ImagePadForOutpaint",
      "pos": {
        "0": 269,
        "1": 727
      },
      "size": {
        "0": 315,
        "1": 174
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 85,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            87
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            86
          ],
          "slot_index": 1,
          "shape": 3,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "ImagePadForOutpaint"
      },
      "widgets_values": [
        0,
        128,
        0,
        128,
        40
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1671,
        "1": 384
      },
      "size": {
        "0": 360.5482177734375,
        "1": 441.5260314941406
      },
      "flags": {},
      "order": 8,
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
      "id": 26,
      "type": "VAEEncodeForInpaint",
      "pos": {
        "0": 617,
        "1": 720
      },
      "size": {
        "0": 226.8000030517578,
        "1": 98
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 87,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 84,
          "label": "VAE"
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 86,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            72
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncodeForInpaint"
      },
      "widgets_values": [
        8
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
      72,
      26,
      0,
      3,
      3,
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
      83,
      29,
      2,
      8,
      1,
      "VAE"
    ],
    [
      84,
      29,
      2,
      26,
      1,
      "VAE"
    ],
    [
      85,
      20,
      0,
      30,
      0,
      "IMAGE"
    ],
    [
      86,
      30,
      1,
      26,
      2,
      "MASK"
    ],
    [
      87,
      30,
      0,
      26,
      0,
      "IMAGE"
    ]
  ],
  "groups": [
    {
      "title": "Load image and pad for outpainting",
      "bounding": [
        -127,
        595,
        1038,
        509
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    }
  ],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.9849732675807633,
      "offset": [
        284.2721369485341,
        36.00902976378898
      ]
    }
  },
  "version": 0.4
}
`})])}const s=t(b,[["render",e]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%984_%E5%A4%96%E7%BB%98.json.html","title":"局部重绘4_外绘.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 30, &quot;last_link_id&quot;: 87, &quot;nodes&quot;: [ { &quot;id&quot;: 6, &quot;type&quot;: &quot;CLIPTextEncode&quot;, &quot;pos&quot;: { &quot;0&...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%984_%E5%A4%96%E7%BB%98.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 30, &quot;last_link_id&quot;: 87, &quot;nodes&quot;: [ { &quot;id&quot;: 6, &quot;type&quot;: &quot;CLIPTextEncode&quot;, &quot;pos&quot;: { &quot;0&..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/局部重绘4_外绘.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 30,<br>\\n&quot;last_link_id&quot;: 87,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 432,<br>\\n&quot;1&quot;: 158<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 422.84503173828125,<br>\\n&quot;1&quot;: 164.31304931640625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 81,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n4<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;outdoors in the yosemite national park mountains nature\\\\n\\\\n\\\\n\\\\n&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 434,<br>\\n&quot;1&quot;: 371<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 425.27801513671875,<br>\\n&quot;1&quot;: 180.6060791015625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 82,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n6<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;watermark, text\\\\n&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1422,<br>\\n&quot;1&quot;: 387<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 42,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 83,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n22<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 940,<br>\\n&quot;1&quot;: 180<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 262<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 80,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 4,<br>\\n&quot;label&quot;: &quot;正面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 6,<br>\\n&quot;label&quot;: &quot;负面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 72,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n42<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n152545289528694,<br>\\n&quot;randomize&quot;,<br>\\n20,<br>\\n8,<br>\\n&quot;uni_pc_bh2&quot;,<br>\\n&quot;normal&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 29,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 17,<br>\\n&quot;1&quot;: 303<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n80<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n81,<br>\\n82<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n83,<br>\\n84<br>\\n],<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;512-inpainting-ema.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 20,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: -107,<br>\\n&quot;1&quot;: 726<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 344,<br>\\n&quot;1&quot;: 346<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n85<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;yosemite_outpaint_example.png&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 30,<br>\\n&quot;type&quot;: &quot;ImagePadForOutpaint&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 269,<br>\\n&quot;1&quot;: 727<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 174<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 85,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n87<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n86<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImagePadForOutpaint&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0,<br>\\n128,<br>\\n0,<br>\\n128,<br>\\n40<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 9,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1671,<br>\\n&quot;1&quot;: 384<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360.5482177734375,<br>\\n&quot;1&quot;: 441.5260314941406<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 22,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 26,<br>\\n&quot;type&quot;: &quot;VAEEncodeForInpaint&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 617,<br>\\n&quot;1&quot;: 720<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 226.8000030517578,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;pixels&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 87,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 84,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 86,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n72<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEEncodeForInpaint&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n8<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n4,<br>\\n6,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n22,<br>\\n8,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n42,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n72,<br>\\n26,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n80,<br>\\n29,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n81,<br>\\n29,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n82,<br>\\n29,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n83,<br>\\n29,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n84,<br>\\n29,<br>\\n2,<br>\\n26,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n85,<br>\\n20,<br>\\n0,<br>\\n30,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n86,<br>\\n30,<br>\\n1,<br>\\n26,<br>\\n2,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n87,<br>\\n30,<br>\\n0,<br>\\n26,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [<br>\\n{<br>\\n&quot;title&quot;: &quot;Load image and pad for outpainting&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n-127,<br>\\n595,<br>\\n1038,<br>\\n509<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n}<br>\\n],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 0.9849732675807633,<br>\\n&quot;offset&quot;: [<br>\\n284.2721369485341,<br>\\n36.00902976378898<br>\\n]<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/局部重绘4_外绘.json","value":{"title":"局部重绘4_外绘.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/局部重绘4_外绘.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{s as comp,p as data};

import{_ as d,c as u,a as e,e as n,w as i,r,o as m,d as s}from"./app-BkGjq3n1.js";const g={};function c(y,t){const o=r("VueFlow"),p=r("Tabs");return m(),u("div",null,[t[3]||(t[3]=e("h1",{id:"readme-show",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#readme-show"},[e("span",null,"README.show")])],-1)),t[4]||(t[4]=e("h2",{id:"comfyui-samply",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comfyui-samply"},[e("span",null,"comfyui - samply")])],-1)),n(o,{type:"comfyui",data:`{
  "last_node_id": 10,
  "last_link_id": 9,
  "nodes": [
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 357,
        "1": 388
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
          "link": 5,
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
        "text, watermark"
      ]
    },
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
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 1,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 4,
          "label": "条件-正面"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 6,
          "label": "条件-负面"
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
      "order": 5,
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
      "order": 6,
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
        "0": -46,
        "1": 329
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
            1
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            3,
            5
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
        "abyssorangemix2SFW_abyssorangemix2Sfw.safetensors"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 357,
        "1": 188
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
          "link": 3,
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
        "beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": {
        "0": -47,
        "1": 600
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
        512,
        1
      ]
    }
  ],
  "links": [
    [
      1,
      4,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      2,
      5,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      3,
      4,
      1,
      6,
      0,
      "CLIP"
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
      5,
      4,
      1,
      7,
      0,
      "CLIP"
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
    ]
  ],
  "groups": [
    {
      "title": "OutputGroup",
      "bounding": [
        1199,
        114,
        472,
        143
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Group",
      "bounding": [
        307,
        40,
        521,
        730
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "InputGroup",
      "bounding": [
        -57,
        255,
        336,
        461
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
        344,
        71
      ]
    },
    "groupNodes": {}
  },
  "version": 0.4
}
`}),t[5]||(t[5]=e("h2",{id:"comfyui-complex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comfyui-complex"},[e("span",null,"comfyui - complex")])],-1)),n(o,{type:"comfyui",data:`{"last_node_id": 437, "last_link_id": 797, "nodes": [{"id": 30, "type": "LoraLoader", "pos": [-29.209791392876824, 1145.1109826710567], "size": {"0": 315, "1": 126}, "flags": {}, "order": 84, "mode": 4, "inputs": [{"name": "model", "type": "MODEL", "link": 34}, {"name": "clip", "type": "CLIP", "link": 35}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [37], "shape": 3, "slot_index": 0}, {"name": "CLIP", "type": "CLIP", "links": [38], "shape": 3}], "properties": {"Node name for S&R": "LoraLoader"}, "widgets_values": ["smooth_belly\\\\Smooth belly_v1.3.2.safetensors", 1, 1], "color": "#223", "bgcolor": "#335"}, {"id": 61, "type": "LoraLoader", "pos": [-690.1906885227033, 1334.0550171771256], "size": {"0": 315, "1": 126}, "flags": {}, "order": 93, "mode": 4, "inputs": [{"name": "model", "type": "MODEL", "link": 96}, {"name": "clip", "type": "CLIP", "link": 97}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [173], "shape": 3, "slot_index": 0}, {"name": "CLIP", "type": "CLIP", "links": [174], "shape": 3, "slot_index": 1}], "properties": {"Node name for S&R": "LoraLoader"}, "widgets_values": ["less_mascrarity\\\\LECO_LessMuscularity.safetensors", 2, 1], "color": "#223", "bgcolor": "#335"}, {"id": 67, "type": "Reroute", "pos": [351.7936210476034, 1119.392840419314], "size": [82, 26], "flags": {}, "order": 100, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 175}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [257, 283], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}, "color": "#223", "bgcolor": "#335"}, {"id": 151, "type": "Note", "pos": [619.3981182858197, 1646.6970081172433], "size": {"0": 210, "1": 58}, "flags": {}, "order": 0, "mode": 0, "properties": {"text": ""}, "widgets_values": ["To Sampler"], "color": "#432", "bgcolor": "#653"}, {"id": 22, "type": "LoraLoader", "pos": [-731.0932005760449, 1135.2737979181709], "size": {"0": 315, "1": 126}, "flags": {}, "order": 74, "mode": 4, "inputs": [{"name": "model", "type": "MODEL", "link": 27}, {"name": "clip", "type": "CLIP", "link": 28}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [32], "shape": 3}, {"name": "CLIP", "type": "CLIP", "links": [33], "shape": 3}], "properties": {"Node name for S&R": "LoraLoader"}, "widgets_values": ["boldline.safetensors", 1, 1], "color": "#223", "bgcolor": "#335"}, {"id": 172, "type": "Note", "pos": [-685.7482150280877, 1748.3585634781134], "size": {"0": 835.734619140625, "1": 71.60798645019531}, "flags": {}, "order": 1, "mode": 0, "properties": {"text": ""}, "widgets_values": ["When using ControlNet, right-click Apply ControlNet (Advanced) for the ControlNet you want to enable > Bypass to enable the node.\\nControlNet \\u3092\\u4f7f\\u3046\\u3068\\u304d\\u306f\\u3001\\u6709\\u52b9\\u306b\\u3057\\u305f\\u3044 ControlNet \\u306e Apply ControlNet (Advanced) \\u3092\\u53f3\\u30af\\u30ea\\u30c3\\u30af > Bypass \\u3067 \\u30ce\\u30fc\\u30c9\\u3092\\u6709\\u52b9\\u306b\\u3059\\u308b\\u3002\\n"], "color": "#432", "bgcolor": "#653"}, {"id": 178, "type": "Reroute", "pos": [4622.905229519308, 1047.402511674265], "size": [82, 26], "flags": {}, "order": 115, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 326}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [327], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}, "color": "#432", "bgcolor": "#653"}, {"id": 184, "type": "Reroute", "pos": [-1819.6200067787568, 995.5969445793428], "size": [82, 26], "flags": {}, "order": 53, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 338}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [339], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 182, "type": "Reroute", "pos": [-2336, 1098], "size": [82, 26], "flags": {}, "order": 64, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 339, "pos": [41, 0]}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [336], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": true}}, {"id": 165, "type": "Note", "pos": [-2250, 519], "size": {"0": 459.4687805175781, "1": 69.06307220458984}, "flags": {}, "order": 2, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Tagging / ControlNet source image\\nTagging \\u3084 ControlNet \\u306e \\u5165\\u529b\\u30a4\\u30e1\\u30fc\\u30b8"], "color": "#432", "bgcolor": "#653"}, {"id": 70, "type": "Reroute", "pos": [4300.422533784826, 1049.7363443937502], "size": [82, 26], "flags": {}, "order": 112, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 527, "slot_index": 0}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [326], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}, "color": "#232", "bgcolor": "#353"}, {"id": 80, "type": "FromBasicPipe", "pos": [4632.905229519308, 1117.402511674265], "size": {"0": 161.1999969482422, "1": 106.72265625}, "flags": {}, "order": 3, "mode": 0, "inputs": [{"name": "basic_pipe", "type": "BASIC_PIPE", "link": null, "slot_index": 0}], "outputs": [{"name": "model", "type": "MODEL", "links": [146], "shape": 3, "slot_index": 0}, {"name": "clip", "type": "CLIP", "links": [], "shape": 3, "slot_index": 1}, {"name": "vae", "type": "VAE", "links": [], "shape": 3}, {"name": "positive", "type": "CONDITIONING", "links": [147], "shape": 3, "slot_index": 3}, {"name": "negative", "type": "CONDITIONING", "links": [148], "shape": 3, "slot_index": 4}], "properties": {"Node name for S&R": "FromBasicPipe"}, "color": "#432", "bgcolor": "#653"}, {"id": 81, "type": "Reroute", "pos": [5796.768904911414, 1044.682158828336], "size": [82, 26], "flags": {}, "order": 122, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 150}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [151, 183], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}, "color": "#432", "bgcolor": "#653"}, {"id": 78, "type": "Reroute", "pos": [4693, -91], "size": [82, 26], "flags": {}, "order": 123, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 151}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [576], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 303, "type": "Note", "pos": [4175.043594367402, -120.89380431865499], "size": {"0": 210, "1": 58}, "flags": {}, "order": 4, "mode": 0, "properties": {"text": ""}, "widgets_values": ["After Upscale image"], "color": "#432", "bgcolor": "#653"}, {"id": 186, "type": "Note", "pos": [5415.768904911414, 949.6821588283361], "size": {"0": 210, "1": 58}, "flags": {}, "order": 5, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Tiled Upscale"], "color": "#432", "bgcolor": "#653"}, {"id": 89, "type": "Reroute", "pos": [1176.8871886188792, 1090.3809040648712], "size": [90.4, 26], "flags": {}, "order": 65, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 215, "slot_index": 0}], "outputs": [{"name": "LATENT", "type": "LATENT", "links": [575], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}, "color": "#233", "bgcolor": "#355"}, {"id": 190, "type": "UpscaleModelLoader", "pos": [5318, 1167], "size": {"0": 336, "1": 58}, "flags": {}, "order": 6, "mode": 0, "outputs": [{"name": "UPSCALE_MODEL", "type": "UPSCALE_MODEL", "links": [562], "shape": 3, "slot_index": 0}], "title": "Tiled Upscale Model (Load Upscale Model)", "properties": {"Node name for S&R": "UpscaleModelLoader"}, "widgets_values": ["RealESRGAN_x4plus.pth"], "color": "#322", "bgcolor": "#533"}, {"id": 59, "type": "Reroute", "pos": [2646.685569603249, 1060.8904844786562], "size": [82, 26], "flags": {}, "order": 91, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 564, "slot_index": 0}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [535, 684], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}, "color": "#232", "bgcolor": "#353"}, {"id": 91, "type": "Reroute", "pos": [1016, -157], "size": [82, 26], "flags": {}, "order": 125, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 576, "pos": [41, 0]}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [161], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": true}}, {"id": 302, "type": "Note", "pos": [3444, -103], "size": {"0": 294.80853271484375, "1": 58}, "flags": {}, "order": 7, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Agter Face and hand dtetailer image"], "color": "#432", "bgcolor": "#653"}, {"id": 29, "type": "LoraLoader", "pos": [-379, 1142], "size": {"0": 315, "1": 126}, "flags": {}, "order": 78, "mode": 4, "inputs": [{"name": "model", "type": "MODEL", "link": 32}, {"name": "clip", "type": "CLIP", "link": 33}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [34], "shape": 3}, {"name": "CLIP", "type": "CLIP", "links": [35], "shape": 3}], "properties": {"Node name for S&R": "LoraLoader"}, "widgets_values": ["flat2.safetensors", -1, -1], "color": "#223", "bgcolor": "#335"}, {"id": 325, "type": "Note", "pos": [1113, 14], "size": {"0": 563.401611328125, "1": 84.65179443359375}, "flags": {}, "order": 8, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Change \\"filename_prifix\\" path to Change image save folder and filename prifix.\\n\\"filename_prifix\\" \\u3092\\u5909\\u3048\\u308b\\u3053\\u3068\\u3067\\u4fdd\\u5b58\\u5148\\u30d5\\u30a9\\u30eb\\u30c0\\u3068 \\u30d5\\u30a1\\u30a4\\u30eb\\u540d\\u306e\\u982d\\u3092\\u6307\\u5b9a\\u3067\\u304d\\u307e\\u3059\\u3002"], "color": "#432", "bgcolor": "#653"}, {"id": 167, "type": "Reroute", "pos": [-1224, 83], "size": [82, 26], "flags": {}, "order": 52, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 311}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [312], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 33, "type": "LoraLoader", "pos": [-1061, 1335], "size": {"0": 315, "1": 126}, "flags": {}, "order": 90, "mode": 4, "inputs": [{"name": "model", "type": "MODEL", "link": 37}, {"name": "clip", "type": "CLIP", "link": 38}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [96], "shape": 3, "slot_index": 0}, {"name": "CLIP", "type": "CLIP", "links": [97], "shape": 3, "slot_index": 1}], "properties": {"Node name for S&R": "LoraLoader"}, "widgets_values": ["DetailTweakerXL\\\\add-detail-xl.safetensors", 1, 1], "color": "#223", "bgcolor": "#335"}, {"id": 96, "type": "LoraLoader", "pos": [-345.19068852270465, 1334.0550171771256], "size": {"0": 315, "1": 126}, "flags": {}, "order": 96, "mode": 4, "inputs": [{"name": "model", "type": "MODEL", "link": 173}, {"name": "clip", "type": "CLIP", "link": 174}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [175], "shape": 3}, {"name": "CLIP", "type": "CLIP", "links": [640], "shape": 3}], "properties": {"Node name for S&R": "LoraLoader"}, "widgets_values": ["breast_slider\\\\breasts_slider_v10.safetensors", 1, 1], "color": "#223", "bgcolor": "#335"}, {"id": 20, "type": "VAELoader", "pos": [-2167.132436225797, 1294], "size": {"0": 315, "1": 58}, "flags": {}, "order": 9, "mode": 0, "outputs": [{"name": "VAE", "type": "VAE", "links": [], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "VAELoader"}, "widgets_values": ["sdxl_vae.safetensors"], "color": "#322", "bgcolor": "#533"}, {"id": 330, "type": "Note", "pos": [2785, 90], "size": {"0": 452.03515625, "1": 210.20628356933594}, "flags": {}, "order": 10, "mode": 0, "properties": {"text": ""}, "widgets_values": ["ANIMAGINE XL 3.0\\nMulti Aspect Resolution\\nThis model supports generating images at the following dimensions:\\n\\nAnimagine XL 3.0 \\u3067\\u306f\\u3001\\u4ee5\\u4e0b\\u306e\\u89e3\\u50cf\\u5ea6\\u306e\\u3044\\u305a\\u308c\\u304b\\u306b\\u8a2d\\u5b9a\\u3059\\u308b\\u3002\\n\\nDimensions\\tAspect Ratio\\n1024 x 1024\\t1:1 Square\\n1152 x 896\\t9:7\\n896 x 1152\\t7:9\\n1216 x 832\\t19:13\\n832 x 1216\\t13:19\\n1344 x 768\\t7:4 Horizontal\\n768 x 1344\\t4:7 Vertical\\n1536 x 640\\t12:5 Horizontal\\n640 x 1536\\t5:12 Vertical\\n\\nhttps://huggingface.co/cagliostrolab/animagine-xl-3.0"], "color": "#432", "bgcolor": "#653"}, {"id": 363, "type": "Anything Everywhere", "pos": [-1729, 1280], "size": {"0": 210, "1": 26}, "flags": {}, "order": 62, "mode": 0, "inputs": [{"name": "VAE", "type": "*", "link": 628, "color_on": "#FF6E6E", "slot_index": 0}], "properties": {"group_restricted": false, "color_restricted": false, "Node name for S&R": "Anything Everywhere"}, "widgets_values": []}, {"id": 281, "type": "Sampler Selector", "pos": [2539, 735], "size": {"0": 210, "1": 58}, "flags": {}, "order": 11, "mode": 0, "outputs": [{"name": "sampler_name", "type": "COMBO", "links": [615], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "Sampler Selector"}, "widgets_values": ["euler_ancestral"], "color": "#322"}, {"id": 300, "type": "ImpactImageBatchToImageList", "pos": [2197, 1075], "size": {"0": 210, "1": 26}, "flags": {}, "order": 88, "mode": 0, "inputs": [{"name": "image", "type": "IMAGE", "link": 586}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [564], "shape": 6, "slot_index": 0}], "properties": {"Node name for S&R": "ImpactImageBatchToImageList"}, "color": "#233", "bgcolor": "#355"}, {"id": 367, "type": "Anything Everywhere", "pos": [352, 1203], "size": {"0": 210, "1": 26}, "flags": {}, "order": 101, "mode": 0, "inputs": [{"name": "CLIP", "type": "*", "link": 640, "color_on": "#FFD500", "slot_index": 0}], "properties": {"group_restricted": false, "color_restricted": false, "Node name for S&R": "Anything Everywhere"}, "widgets_values": []}, {"id": 359, "type": "Anything Everywhere?", "pos": [2827, 739], "size": {"0": 315, "1": 127}, "flags": {}, "order": 47, "mode": 0, "inputs": [{"name": "COMBO", "type": "*", "link": 615}], "properties": {"group_restricted": false, "color_restricted": false, "Node name for S&R": "Anything Everywhere?"}, "widgets_values": [".*", "sampler_name", ".*"]}, {"id": 278, "type": "ImpactInt", "pos": [2529, 430], "size": {"0": 210, "1": 64.41685485839844}, "flags": {}, "order": 12, "mode": 0, "outputs": [{"name": "INT", "type": "INT", "links": [439, 559, 567], "shape": 3, "slot_index": 0}], "title": "Steps (ImpactInt)", "properties": {"Node name for S&R": "ImpactInt"}, "widgets_values": [28], "color": "#322", "bgcolor": "#533"}, {"id": 277, "type": "ImpactFloat", "pos": [2528, 568], "size": {"0": 210, "1": 58}, "flags": {}, "order": 13, "mode": 0, "outputs": [{"name": "FLOAT", "type": "FLOAT", "links": [633], "shape": 3, "slot_index": 0}], "title": "CFG (ImpactFloat)", "properties": {"Node name for S&R": "ImpactFloat"}, "widgets_values": [7], "color": "#322", "bgcolor": "#533"}, {"id": 313, "type": "MathExpression|pysssss", "pos": [4634, 1474], "size": {"0": 218.39999389648438, "1": 116}, "flags": {}, "order": 49, "mode": 0, "inputs": [{"name": "a", "type": "INT,FLOAT,IMAGE,LATENT", "link": 559}, {"name": "b", "type": "INT,FLOAT,IMAGE,LATENT", "link": null}, {"name": "c", "type": "INT,FLOAT,IMAGE,LATENT", "link": null}], "outputs": [{"name": "INT", "type": "INT", "links": [554], "shape": 3, "slot_index": 0}, {"name": "FLOAT", "type": "FLOAT", "links": null, "shape": 3}], "title": "Steps (Math Expression \\ud83d\\udc0d)", "properties": {"Node name for S&R": "MathExpression|pysssss"}, "widgets_values": ["a / 2 "], "color": "#432", "bgcolor": "#653"}, {"id": 364, "type": "Anything Everywhere?", "pos": [2823, 564], "size": {"0": 315, "1": 127}, "flags": {}, "order": 50, "mode": 0, "inputs": [{"name": "FLOAT", "type": "*", "link": 633, "color_on": ""}], "properties": {"group_restricted": false, "color_restricted": false, "Node name for S&R": "Anything Everywhere?"}, "widgets_values": [".*", "cfg", ".*"]}, {"id": 368, "type": "Note", "pos": [2120, 434], "size": {"0": 381.81817626953125, "1": 58}, "flags": {}, "order": 14, "mode": 0, "properties": {"text": ""}, "widgets_values": ["In Animagine XL 3.0 should better sampling steps to below 30"], "color": "#432", "bgcolor": "#653"}, {"id": 362, "type": "Note", "pos": [2119, 572], "size": {"0": 381.81817626953125, "1": 58}, "flags": {}, "order": 15, "mode": 0, "properties": {"text": ""}, "widgets_values": ["In Animagine XL 3.0 should better CFG to 5.0 - 7.0\\n"], "color": "#432", "bgcolor": "#653"}, {"id": 357, "type": "Note", "pos": [2132, 729], "size": {"0": 381.81817626953125, "1": 58}, "flags": {}, "order": 16, "mode": 0, "properties": {"text": ""}, "widgets_values": ["In Animagine XL 3.0 fixed to euler_ancestral \\n"], "color": "#432", "bgcolor": "#653"}, {"id": 346, "type": "StringFunction|pysssss", "pos": [-252, -5], "size": {"0": 580.1893920898438, "1": 164}, "flags": {}, "order": 57, "mode": 0, "inputs": [{"name": "text_a", "type": "STRING", "link": 608, "widget": {"name": "text_a"}, "slot_index": 0}, {"name": "text_b", "type": "STRING", "link": 609, "widget": {"name": "text_b"}, "slot_index": 1}, {"name": "text_c", "type": "STRING", "link": 610, "widget": {"name": "text_c"}}], "outputs": [{"name": "STRING", "type": "STRING", "links": [611], "shape": 3, "slot_index": 0}], "title": "Add Positive Prompt String Function \\ud83d\\udc0d", "properties": {"Node name for S&R": "StringFunction|pysssss"}, "widgets_values": ["append", "yes", "1girl,", "", "microskirt on swimwear, cleavage, navel, beach, neat, smile, standing, anime, ", "1girl, microskirt on swimwear, cleavage, navel, beach, neat, smile, standing, anime, "], "color": "#322"}, {"id": 356, "type": "Note", "pos": [-250, -679], "size": {"0": 572, "1": 62}, "flags": {}, "order": 17, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Animagine Prompting Guide \\nAnimagine\\u30d7\\u30ed\\u30f3\\u30d7\\u30c8\\u30ac\\u30a4\\u30c9\\nhttps://cagliostrolab.net/posts/animagine-xl-v3-release#tag-ordering"], "color": "#432", "bgcolor": "#653"}, {"id": 353, "type": "Note", "pos": [32, -555], "size": {"0": 236.8662109375, "1": 58}, "flags": {}, "order": 18, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Character name, From what series,\\n\\u30ad\\u30e3\\u30e9\\u30af\\u30bf\\u30fc\\u540d, \\u4f5c\\u54c1\\u540d"], "color": "#432", "bgcolor": "#653"}, {"id": 344, "type": "Note", "pos": [-228, -557], "size": {"0": 210, "1": 58}, "flags": {}, "order": 19, "mode": 0, "properties": {"text": ""}, "widgets_values": ["1boy/1girl"], "color": "#432", "bgcolor": "#653"}, {"id": 44, "type": "PrimitiveNode", "pos": [-263, -454], "size": {"0": 235.1999969482422, "1": 76}, "flags": {}, "order": 20, "mode": 0, "outputs": [{"name": "STRING", "type": "STRING", "links": [608], "widget": {"name": "text_a"}, "slot_index": 0}], "title": "Positive Prompt (1boy/1girl)", "properties": {"Run widget replace on values": false}, "widgets_values": ["1girl,"], "color": "#322", "bgcolor": "#533"}, {"id": 354, "type": "Note", "pos": [-494, -289], "size": {"0": 210, "1": 58}, "flags": {}, "order": 21, "mode": 0, "properties": {"text": ""}, "widgets_values": ["General Tag\\n\\u666e\\u901a\\u306e\\u30bf\\u30b0"], "color": "#432", "bgcolor": "#653"}, {"id": 102, "type": "LoadImage", "pos": [-2212, 666], "size": {"0": 308.9981994628906, "1": 330.0771179199219}, "flags": {}, "order": 22, "mode": 0, "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [284, 311, 338], "shape": 3, "slot_index": 0}, {"name": "MASK", "type": "MASK", "links": null, "shape": 3}], "properties": {"Node name for S&R": "LoadImage"}, "widgets_values": ["animagine_xl_00200_ (2).png", "image"], "color": "#322", "bgcolor": "#533"}, {"id": 161, "type": "Reroute", "pos": [-1230, 1802], "size": [140.8, 26], "flags": {}, "order": 73, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 682}], "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [298]}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 160, "type": "Reroute", "pos": [-1230, 1752], "size": [140.8, 26], "flags": {}, "order": 89, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 683}], "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [297]}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 162, "type": "Reroute", "pos": [557, 1762], "size": [140.8, 26], "flags": {}, "order": 108, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 301}], "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [303]}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 124, "type": "Reroute", "pos": [-1217, 1928], "size": [82, 26], "flags": {}, "order": 75, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 337}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [316, 664, 667], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 183, "type": "Reroute", "pos": [-2166, 1944], "size": [82, 26], "flags": {}, "order": 70, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 336}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [337], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 101, "type": "WD14Tagger|pysssss", "pos": [-1083, 83], "size": {"0": 414.78924560546875, "1": 258.6625671386719}, "flags": {}, "order": 63, "mode": 4, "inputs": [{"name": "image", "type": "IMAGE", "link": 312, "slot_index": 0}], "outputs": [{"name": "STRING", "type": "STRING", "links": [313], "shape": 6, "slot_index": 0}], "properties": {"Node name for S&R": "WD14Tagger|pysssss"}, "widgets_values": ["wd-v1-4-moat-tagger-v2", 0.35, 0.85, "", false, ""]}, {"id": 136, "type": "Reroute", "pos": [393, 2668], "size": [140.8, 26], "flags": {}, "order": 103, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 672, "slot_index": 0}], "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [301], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 135, "type": "Reroute", "pos": [393, 2700], "size": [140.8, 26], "flags": {}, "order": 104, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 673, "slot_index": 0}], "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [302], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 127, "type": "ControlNetLoader", "pos": [-882, 2636], "size": {"0": 413.7696228027344, "1": 58.89119338989258}, "flags": {}, "order": 23, "mode": 4, "outputs": [{"name": "CONTROL_NET", "type": "CONTROL_NET", "links": [233], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "ControlNetLoader"}, "widgets_values": ["sdxl\\\\diffusers_xl_canny_small.safetensors"]}, {"id": 121, "type": "ControlNetLoader", "pos": [-900, 2276], "size": {"0": 411.9349060058594, "1": 58}, "flags": {}, "order": 24, "mode": 4, "outputs": [{"name": "CONTROL_NET", "type": "CONTROL_NET", "links": [620], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "ControlNetLoader"}, "widgets_values": ["sdxl\\\\diffusers_xl_depth_small.safetensors"]}, {"id": 360, "type": "ControlNetApplyAdvanced", "pos": [-410, 2340], "size": {"0": 315, "1": 166}, "flags": {}, "order": 95, "mode": 4, "inputs": [{"name": "positive", "type": "CONDITIONING", "link": 616}, {"name": "negative", "type": "CONDITIONING", "link": 617}, {"name": "control_net", "type": "CONTROL_NET", "link": 620}, {"name": "image", "type": "IMAGE", "link": 666}], "outputs": [{"name": "positive", "type": "CONDITIONING", "links": [618], "shape": 3, "slot_index": 0}, {"name": "negative", "type": "CONDITIONING", "links": [619], "shape": 3, "slot_index": 1}], "properties": {"Node name for S&R": "ControlNetApplyAdvanced"}, "widgets_values": [0.5, 0, 0.6]}, {"id": 128, "type": "ControlNetApplyAdvanced", "pos": [-410, 2720], "size": {"0": 315, "1": 166}, "flags": {}, "order": 99, "mode": 4, "inputs": [{"name": "positive", "type": "CONDITIONING", "link": 618}, {"name": "negative", "type": "CONDITIONING", "link": 619, "slot_index": 1}, {"name": "control_net", "type": "CONTROL_NET", "link": 233}, {"name": "image", "type": "IMAGE", "link": 668}], "outputs": [{"name": "positive", "type": "CONDITIONING", "links": [672], "shape": 3, "slot_index": 0}, {"name": "negative", "type": "CONDITIONING", "links": [673], "shape": 3, "slot_index": 1}], "properties": {"Node name for S&R": "ControlNetApplyAdvanced"}, "widgets_values": [0.5, 0, 0.6]}, {"id": 110, "type": "ControlNetApplyAdvanced", "pos": [-440, 1972], "size": {"0": 315, "1": 166}, "flags": {}, "order": 92, "mode": 4, "inputs": [{"name": "positive", "type": "CONDITIONING", "link": 297, "slot_index": 0}, {"name": "negative", "type": "CONDITIONING", "link": 298, "slot_index": 1}, {"name": "control_net", "type": "CONTROL_NET", "link": 199}, {"name": "image", "type": "IMAGE", "link": 317}], "outputs": [{"name": "positive", "type": "CONDITIONING", "links": [616], "shape": 3, "slot_index": 0}, {"name": "negative", "type": "CONDITIONING", "links": [617], "shape": 3, "slot_index": 1}], "properties": {"Node name for S&R": "ControlNetApplyAdvanced"}, "widgets_values": [0.5, 0, 0.6]}, {"id": 141, "type": "Reroute", "pos": [-279, 921], "size": [82, 26], "flags": {}, "order": 114, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 781}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [676], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 46, "type": "ToBasicPipe", "pos": [803, 1037], "size": {"0": 161.1999969482422, "1": 106}, "flags": {}, "order": 113, "mode": 0, "inputs": [{"name": "model", "type": "MODEL", "link": 797, "slot_index": 0}, {"name": "clip", "type": "CLIP", "link": null}, {"name": "vae", "type": "VAE", "link": null}, {"name": "positive", "type": "CONDITIONING", "link": 303, "slot_index": 3}, {"name": "negative", "type": "CONDITIONING", "link": 304, "slot_index": 4}], "outputs": [{"name": "basic_pipe", "type": "BASIC_PIPE", "links": [636], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "ToBasicPipe"}}, {"id": 301, "type": "Note", "pos": [415, -105], "size": {"0": 542.8666381835938, "1": 95.56259155273438}, "flags": {}, "order": 25, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Select good images and [ Progress selected images] to next step.\\nNo good images [ Cancel current run ]\\n\\u826f\\u3044\\u3068\\u601d\\u3046\\u30a4\\u30e1\\u30fc\\u30b8\\u3092\\u9078\\u629e\\u3057\\u3066  [ Progress selected images ] \\u3067\\u6b21\\u306e\\u30b9\\u30c6\\u30c3\\u30d7\\u3078\\n\\u826f\\u3044\\u30a4\\u30e1\\u30fc\\u30b8\\u304c\\u306a\\u304b\\u3063\\u305f\\u3089 [ Cancel current run ] \\u3067\\u7d42\\u4e86\\u3002\\n"], "color": "#432", "bgcolor": "#653"}, {"id": 400, "type": "LeReS-DepthMapPreprocessor", "pos": [-800, 2400], "size": {"0": 352.79998779296875, "1": 130}, "flags": {}, "order": 80, "mode": 4, "inputs": [{"name": "image", "type": "IMAGE", "link": 664}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [665, 666], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "LeReS-DepthMapPreprocessor"}, "widgets_values": [0, 0, "disable", 1024]}, {"id": 401, "type": "Canny", "pos": [-780, 2760], "size": {"0": 315, "1": 82}, "flags": {}, "order": 81, "mode": 4, "inputs": [{"name": "image", "type": "IMAGE", "link": 667}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [668, 670], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "Canny"}, "widgets_values": [0.4, 0.8]}, {"id": 170, "type": "OpenposePreprocessor", "pos": [-810, 2030], "size": {"0": 315, "1": 130}, "flags": {}, "order": 79, "mode": 4, "inputs": [{"name": "image", "type": "IMAGE", "link": 316}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [317, 318], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "OpenposePreprocessor"}, "widgets_values": ["enable", "enable", "enable", "v1.1"]}, {"id": 114, "type": "ControlNetLoader", "pos": [-903, 1917], "size": {"0": 407.4970703125, "1": 58}, "flags": {}, "order": 26, "mode": 4, "outputs": [{"name": "CONTROL_NET", "type": "CONTROL_NET", "links": [199], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "ControlNetLoader"}, "widgets_values": ["sdxl\\\\OpenPoseXL2.safetensors"]}, {"id": 119, "type": "PreviewImage", "pos": [-50, 2040], "size": {"0": 323.8066711425781, "1": 267.24481201171875}, "flags": {}, "order": 85, "mode": 4, "inputs": [{"name": "images", "type": "IMAGE", "link": 318}], "properties": {"Node name for S&R": "PreviewImage"}}, {"id": 125, "type": "PreviewImage", "pos": [-60, 2400], "size": {"0": 331.2294616699219, "1": 261.594970703125}, "flags": {}, "order": 86, "mode": 4, "inputs": [{"name": "images", "type": "IMAGE", "link": 665}], "properties": {"Node name for S&R": "PreviewImage"}}, {"id": 129, "type": "PreviewImage", "pos": [-40, 2780], "size": {"0": 308.7117614746094, "1": 293.91510009765625}, "flags": {}, "order": 87, "mode": 4, "inputs": [{"name": "images", "type": "IMAGE", "link": 670}], "properties": {"Node name for S&R": "PreviewImage"}}, {"id": 390, "type": "Reroute", "pos": [-1779, 1722], "size": [90.4, 26], "flags": {}, "order": 77, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 653, "widget": {"name": "value"}}], "outputs": [{"name": "STRING", "type": "STRING", "links": [680], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 405, "type": "CLIPTextEncode", "pos": [-1591, 1829], "size": {"0": 285.6000061035156, "1": 54}, "flags": {}, "order": 67, "mode": 0, "inputs": [{"name": "clip", "type": "CLIP", "link": null}, {"name": "text", "type": "STRING", "link": 681, "widget": {"name": "text"}}], "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [682], "shape": 3, "slot_index": 0}], "title": "Negative CLIP Text Encode (Prompt)", "properties": {"Node name for S&R": "CLIPTextEncode"}, "widgets_values": ["undefined"]}, {"id": 404, "type": "CLIPTextEncode", "pos": [-1594, 1706], "size": {"0": 285.6000061035156, "1": 54}, "flags": {}, "order": 83, "mode": 0, "inputs": [{"name": "clip", "type": "CLIP", "link": null}, {"name": "text", "type": "STRING", "link": 680, "widget": {"name": "text"}}], "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [683], "shape": 3, "slot_index": 0}], "title": "Positive CLIP Text Encode (Prompt)", "properties": {"Node name for S&R": "CLIPTextEncode"}, "widgets_values": [""]}, {"id": 392, "type": "Reroute", "pos": [-1770, 1842], "size": [90.4, 26], "flags": {}, "order": 59, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 776, "widget": {"name": "value"}}], "outputs": [{"name": "STRING", "type": "STRING", "links": [681], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 279, "type": "MathExpression|pysssss", "pos": [2979, 1163], "size": {"0": 210, "1": 116}, "flags": {}, "order": 48, "mode": 0, "inputs": [{"name": "a", "type": "INT,FLOAT,IMAGE,LATENT", "link": 439}, {"name": "b", "type": "INT,FLOAT,IMAGE,LATENT", "link": null}, {"name": "c", "type": "INT,FLOAT,IMAGE,LATENT", "link": null}], "outputs": [{"name": "INT", "type": "INT", "links": [498, 508], "shape": 3, "slot_index": 0}, {"name": "FLOAT", "type": "FLOAT", "links": null, "shape": 3}], "properties": {"Node name for S&R": "MathExpression|pysssss"}, "widgets_values": ["a / 2 + 5"], "color": "#232", "bgcolor": "#353"}, {"id": 298, "type": "Reroute", "pos": [2999, 1774], "size": [82, 26], "flags": {}, "order": 94, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 535}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [537, 538], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 366, "type": "Anything Everywhere", "pos": [1000, 1034], "size": {"0": 210, "1": 26}, "flags": {}, "order": 116, "mode": 0, "inputs": [{"name": "BASIC_PIPE", "type": "*", "link": 636, "color_on": ""}], "properties": {"group_restricted": false, "color_restricted": false, "Node name for S&R": "Anything Everywhere"}, "widgets_values": []}, {"id": 163, "type": "Reroute", "pos": [559, 1832], "size": [140.8, 26], "flags": {}, "order": 109, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 302}], "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [304], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 173, "type": "PrimitiveNode", "pos": [-4, -456], "size": {"0": 331.4049987792969, "1": 79.49497985839844}, "flags": {}, "order": 27, "mode": 0, "outputs": [{"name": "STRING", "type": "STRING", "links": [609], "slot_index": 0, "widget": {"name": "text_b"}}], "title": "Positive Prompt (Character name)", "properties": {"Run widget replace on values": false}, "widgets_values": [""], "color": "#322", "bgcolor": "#533"}, {"id": 52, "type": "UltralyticsDetectorProvider", "pos": [2880, 1340], "size": {"0": 279.1570739746094, "1": 78}, "flags": {}, "order": 28, "mode": 0, "outputs": [{"name": "BBOX_DETECTOR", "type": "BBOX_DETECTOR", "links": [66], "shape": 3, "slot_index": 0}, {"name": "SEGM_DETECTOR", "type": "SEGM_DETECTOR", "links": null, "shape": 3}], "properties": {"Node name for S&R": "UltralyticsDetectorProvider"}, "widgets_values": ["bbox/face_yolov8m.pt"], "color": "#232", "bgcolor": "#353"}, {"id": 50, "type": "BboxDetectorSEGS", "pos": [3190, 1330], "size": {"0": 210, "1": 212}, "flags": {}, "order": 97, "mode": 0, "inputs": [{"name": "bbox_detector", "type": "BBOX_DETECTOR", "link": 66}, {"name": "image", "type": "IMAGE", "link": 537}, {"name": "detailer_hook", "type": "DETAILER_HOOK", "link": null}], "outputs": [{"name": "SEGS", "type": "SEGS", "links": [505], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "BboxDetectorSEGS"}, "widgets_values": [0.5, 10, 3, 10, "all"], "color": "#232", "bgcolor": "#353"}, {"id": 294, "type": "DetailerForEachPipe", "pos": [3500, 1050], "size": {"0": 287.20001220703125, "1": 524}, "flags": {}, "order": 102, "mode": 0, "inputs": [{"name": "image", "type": "IMAGE", "link": 684}, {"name": "segs", "type": "SEGS", "link": 505}, {"name": "basic_pipe", "type": "BASIC_PIPE", "link": null}, {"name": "detailer_hook", "type": "DETAILER_HOOK", "link": null}, {"name": "refiner_basic_pipe_opt", "type": "BASIC_PIPE", "link": null}, {"name": "seed", "type": "INT", "link": null, "widget": {"name": "seed"}}, {"name": "steps", "type": "INT", "link": 508, "widget": {"name": "steps"}}, {"name": "cfg", "type": "FLOAT", "link": null, "widget": {"name": "cfg"}}, {"name": "sampler_name", "type": "COMBO", "link": null, "widget": {"name": "sampler_name"}}], "outputs": [{"name": "image", "type": "IMAGE", "links": [511], "shape": 3, "slot_index": 0}, {"name": "segs", "type": "SEGS", "links": [], "shape": 3, "slot_index": 1}, {"name": "basic_pipe", "type": "BASIC_PIPE", "links": [512], "shape": 3, "slot_index": 2}, {"name": "cnet_images", "type": "IMAGE", "links": [], "shape": 6, "slot_index": 3}], "title": "Face Detailer (SEGS/pipe)", "properties": {"Node name for S&R": "DetailerForEachPipe"}, "widgets_values": [768, true, 1024, 640624904074044, "randomize", 20, 8, "euler", "normal", 0.4, 5, true, false, "", 0.1, 1, false, 10], "color": "#232", "bgcolor": "#353"}, {"id": 55, "type": "UltralyticsDetectorProvider", "pos": [3190, 1650], "size": {"0": 274.7025146484375, "1": 81.72265625}, "flags": {}, "order": 29, "mode": 0, "outputs": [{"name": "BBOX_DETECTOR", "type": "BBOX_DETECTOR", "links": [68], "shape": 3, "slot_index": 0}, {"name": "SEGM_DETECTOR", "type": "SEGM_DETECTOR", "links": null, "shape": 3}], "properties": {"Node name for S&R": "UltralyticsDetectorProvider"}, "widgets_values": ["bbox/hand_yolov8s.pt"], "color": "#232", "bgcolor": "#353"}, {"id": 53, "type": "BboxDetectorSEGS", "pos": [3540, 1660], "size": {"0": 210, "1": 212.00009155273438}, "flags": {}, "order": 98, "mode": 0, "inputs": [{"name": "bbox_detector", "type": "BBOX_DETECTOR", "link": 68}, {"name": "image", "type": "IMAGE", "link": 538}, {"name": "detailer_hook", "type": "DETAILER_HOOK", "link": null}], "outputs": [{"name": "SEGS", "type": "SEGS", "links": [494], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "BboxDetectorSEGS"}, "widgets_values": [0.5, 10, 3, 10, "all"], "color": "#232", "bgcolor": "#353"}, {"id": 319, "type": "ImpactKSamplerAdvancedBasicPipe", "pos": [1365.8871886188792, 1062.3809040648712], "size": {"0": 315, "1": 314}, "flags": {}, "order": 71, "mode": 0, "inputs": [{"name": "basic_pipe", "type": "BASIC_PIPE", "link": null}, {"name": "latent_image", "type": "LATENT", "link": 575}, {"name": "noise_seed", "type": "INT", "link": null, "widget": {"name": "noise_seed"}}, {"name": "steps", "type": "INT", "link": 567, "widget": {"name": "steps"}}, {"name": "cfg", "type": "FLOAT", "link": null, "widget": {"name": "cfg"}}, {"name": "sampler_name", "type": "COMBO", "link": null, "widget": {"name": "sampler_name"}}], "outputs": [{"name": "BASIC_PIPE", "type": "BASIC_PIPE", "links": [], "shape": 3, "slot_index": 0}, {"name": "LATENT", "type": "LATENT", "links": [685], "shape": 3, "slot_index": 1}, {"name": "VAE", "type": "VAE", "links": [], "shape": 3, "slot_index": 2}], "properties": {"Node name for S&R": "ImpactKSamplerAdvancedBasicPipe"}, "widgets_values": [true, 285055189712447, "randomize", 20, 8, "euler", "normal", 0, 10000, false], "color": "#233", "bgcolor": "#355"}, {"id": 406, "type": "VAEDecodeTiled", "pos": [1739, 1083], "size": {"0": 210, "1": 78}, "flags": {}, "order": 76, "mode": 0, "inputs": [{"name": "samples", "type": "LATENT", "link": 685}, {"name": "vae", "type": "VAE", "link": null}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [686], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "VAEDecodeTiled"}, "widgets_values": [768], "color": "#233", "bgcolor": "#355"}, {"id": 322, "type": "Note", "pos": [2207, 43], "size": {"0": 254.72877502441406, "1": 58}, "flags": {}, "order": 30, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Batch size to choice(gacha) images.\\n\\u30ac\\u30c1\\u30e3\\u30a4\\u30e1\\u30fc\\u30b8\\u6570"], "color": "#432", "bgcolor": "#653"}, {"id": 9, "type": "SaveImage", "pos": [1097, 139], "size": [582.3792724609375, 604.3748779296875], "flags": {}, "order": 126, "mode": 0, "inputs": [{"name": "images", "type": "IMAGE", "link": 161, "slot_index": 0}], "properties": {}, "widgets_values": ["animagine_xl_lora_detailer_upscaler/animagine_xl"], "color": "#223", "bgcolor": "#335", "locked": true}, {"id": 407, "type": "SizeFromPresetsSDXL", "pos": [2499, 145], "size": {"0": 233.123291015625, "1": 78}, "flags": {}, "order": 31, "mode": 0, "outputs": [{"name": "w", "type": "INT", "links": [706, 708], "shape": 3, "slot_index": 0}, {"name": "h", "type": "INT", "links": [707, 709], "shape": 3, "slot_index": 1}], "properties": {"Node name for S&R": "SizeFromPresetsSDXL"}, "widgets_values": [" 896 x 1152"], "color": "#322", "bgcolor": "#533"}, {"id": 88, "type": "EmptyLatentImage", "pos": [2222, 285], "size": {"0": 243.60000610351562, "1": 82}, "flags": {}, "order": 56, "mode": 0, "inputs": [{"name": "batch_size", "type": "INT", "link": 577, "widget": {"name": "batch_size"}, "slot_index": 0}, {"name": "width", "type": "INT", "link": 708, "widget": {"name": "width"}}, {"name": "height", "type": "INT", "link": 709, "widget": {"name": "height"}}], "outputs": [{"name": "LATENT", "type": "LATENT", "links": [215], "slot_index": 0}], "title": "BasicSize(Empty Latent Image)", "properties": {"Node name for S&R": "EmptyLatentImage"}, "widgets_values": [896, 1152, 9], "color": "#322"}, {"id": 373, "type": "Anything Everywhere?", "pos": [2862, -95], "size": {"0": 315, "1": 127}, "flags": {}, "order": 55, "mode": 0, "inputs": [{"name": "INT", "type": "*", "link": 707, "color_on": "", "slot_index": 0}], "properties": {"group_restricted": false, "color_restricted": false, "Node name for S&R": "Anything Everywhere?"}, "widgets_values": [".*", ".*height", ".*"]}, {"id": 371, "type": "Anything Everywhere?", "pos": [2867, -266], "size": {"0": 315, "1": 127}, "flags": {}, "order": 54, "mode": 0, "inputs": [{"name": "INT", "type": "*", "link": 706, "color_on": ""}], "properties": {"group_restricted": false, "color_restricted": false, "Node name for S&R": "Anything Everywhere?"}, "widgets_values": [".*", ".*width", ".*"]}, {"id": 321, "type": "Int Literal", "pos": [2247, 162], "size": {"0": 210, "1": 58}, "flags": {}, "order": 32, "mode": 0, "outputs": [{"name": "INT", "type": "INT", "links": [577], "shape": 3}], "title": "Batch Size (Int Literal)", "properties": {"Node name for S&R": "Int Literal"}, "widgets_values": [4], "color": "#322", "bgcolor": "#533"}, {"id": 166, "type": "Note", "pos": [-636, 161], "size": {"0": 302.4853820800781, "1": 90.37352752685547}, "flags": {}, "order": 33, "mode": 0, "properties": {"text": ""}, "widgets_values": ["If you want to get Prompt string  from Tagger, you may connect Tagger side connector.\\n\\nTagger \\u304b\\u3089 Prompt \\u3092\\u8cb0\\u3046\\u5834\\u5408\\u306f\\u4e0b\\u5074\\u306b\\u3064\\u306a\\u3050"], "color": "#432", "bgcolor": "#653"}, {"id": 355, "type": "Note", "pos": [-504, -167], "size": {"0": 210, "1": 58}, "flags": {}, "order": 34, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Quality Tag\\n\\u30af\\u30aa\\u30ea\\u30c6\\u30a3\\u30bf\\u30b0"], "color": "#432", "bgcolor": "#653"}, {"id": 152, "type": "Reroute", "pos": [-370, 74], "size": [90.4, 26], "flags": {}, "order": 66, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 710, "slot_index": 0, "widget": {"name": "value"}}], "outputs": [{"name": "STRING", "type": "STRING", "links": [717]}], "properties": {"showOutputText": true, "horizontal": false}, "color": "#322", "bgcolor": "#533"}, {"id": 111, "type": "Reroute", "pos": [-593, 77], "size": [90.4, 26], "flags": {}, "order": 69, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 313}], "outputs": [{"name": "STRING", "type": "STRING", "links": [], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 347, "type": "PrimitiveNode", "pos": [-263, -327], "size": {"0": 592.66943359375, "1": 112.09001922607422}, "flags": {}, "order": 35, "mode": 0, "outputs": [{"name": "STRING", "type": "STRING", "links": [610], "slot_index": 0, "widget": {"name": "text_c"}}], "title": "Positive Prompt (General Tag)", "properties": {"Run widget replace on values": false}, "widgets_values": ["microskirt on swimwear, cleavage, navel, beach, neat, smile, standing, anime, "], "color": "#322", "bgcolor": "#533"}, {"id": 345, "type": "PrimitiveNode", "pos": [-262, -152], "size": {"0": 595.6798095703125, "1": 76}, "flags": {}, "order": 36, "mode": 0, "outputs": [{"name": "STRING", "type": "STRING", "links": [613], "slot_index": 0, "widget": {"name": "text_c"}}], "title": "Positive Prompt Quality Tags", "properties": {"Run widget replace on values": false}, "widgets_values": ["masterpiece, best quality,"], "color": "#322", "bgcolor": "#533"}, {"id": 31, "type": "StringFunction|pysssss", "pos": [-255, 229], "size": {"0": 589.6410522460938, "1": 195.15089416503906}, "flags": {}, "order": 72, "mode": 0, "inputs": [{"name": "text_a", "type": "STRING", "link": 611, "widget": {"name": "text_a"}, "slot_index": 0}, {"name": "text_b", "type": "STRING", "link": 717, "widget": {"name": "text_b"}, "slot_index": 1}, {"name": "text_c", "type": "STRING", "link": 613, "widget": {"name": "text_c"}}], "outputs": [{"name": "STRING", "type": "STRING", "links": [653], "shape": 3, "slot_index": 0}], "title": "Add Positive Prompt String Function \\ud83d\\udc0d", "properties": {"Node name for S&R": "StringFunction|pysssss"}, "widgets_values": ["append", "yes", "Masterpiece, dynamic pose, peace hand", "undefined", "masterpiece, best quality,", "1girl, microskirt on swimwear, cleavage, navel, beach, neat, smile, standing, anime, masterpiece, best quality,"], "color": "#322"}, {"id": 25, "type": "LoraLoader", "pos": [-1070, 1140], "size": {"0": 315, "1": 126}, "flags": {}, "order": 68, "mode": 4, "inputs": [{"name": "model", "type": "MODEL", "link": 773, "slot_index": 0}, {"name": "clip", "type": "CLIP", "link": 774, "slot_index": 1}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [27], "shape": 3}, {"name": "CLIP", "type": "CLIP", "links": [28], "shape": 3}], "properties": {"Node name for S&R": "LoraLoader"}, "widgets_values": ["sdxl-flat\\\\sdxl-flat.safetensors", -0.5, -0.5], "color": "#223", "bgcolor": "#335"}, {"id": 24, "type": "CLIPSetLastLayer", "pos": [-1744.692272863572, 1161.2694072099705], "size": {"0": 315, "1": 58}, "flags": {}, "order": 61, "mode": 0, "inputs": [{"name": "clip", "type": "CLIP", "link": 29}], "outputs": [{"name": "CLIP", "type": "CLIP", "links": [774], "shape": 3, "slot_index": 0}], "title": "Clip skip (CLIP Set Last Layer)", "properties": {"Node name for S&R": "CLIPSetLastLayer"}, "widgets_values": [-2], "color": "#322", "bgcolor": "#533"}, {"id": 408, "type": "Reroute", "pos": [-592, -52], "size": [90.4, 26], "flags": {}, "order": 58, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 775, "slot_index": 0, "widget": {"name": "value"}}], "outputs": [{"name": "STRING", "type": "STRING", "links": [710], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 431, "type": "String Literal", "pos": [-846, -100], "size": {"0": 210, "1": 76}, "flags": {}, "order": 37, "mode": 0, "outputs": [{"name": "STRING", "type": "STRING", "links": [775], "shape": 3}], "properties": {"Node name for S&R": "String Literal"}, "widgets_values": [""]}, {"id": 181, "type": "Note", "pos": [659, 860], "size": {"0": 459.4687805175781, "1": 69.06307220458984}, "flags": {}, "order": 38, "mode": 0, "properties": {"text": ""}, "widgets_values": ["If you want to use IPAdapter, you may connect MODEL to IPAdapter side.\\nIPAdapter\\u3092\\u4f7f\\u3046\\u3068\\u304d\\u306f Model \\u3092\\u4e0a\\u306e\\u30e2\\u30c7\\u30eb\\u306b\\u7e4b\\u304e\\u5909\\u3048\\u308b"], "color": "#432", "bgcolor": "#653"}, {"id": 432, "type": "String Literal", "pos": [-255, 495], "size": {"0": 582.5125122070312, "1": 223.07977294921875}, "flags": {}, "order": 39, "mode": 0, "outputs": [{"name": "STRING", "type": "STRING", "links": [776], "shape": 3, "slot_index": 0}], "title": "Negative Prompt (String Literal)", "properties": {"Node name for S&R": "String Literal"}, "widgets_values": ["nsfw, lowres, bad anatomy, bad hands, text, error, 5 fingers, 6 fingers, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name"], "color": "#322", "bgcolor": "#533"}, {"id": 142, "type": "Reroute", "pos": [-1724.968267625861, 671.6927078226502], "size": [82, 26], "flags": {}, "order": 106, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 283}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [779], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 149, "type": "Reroute", "pos": [-1737.052440674239, 762.5808052995139], "size": [82, 26], "flags": {}, "order": 51, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 284}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [780], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}}, {"id": 436, "type": "MathExpression|pysssss", "pos": [4920, 1600], "size": {"0": 218.39999389648438, "1": 116.00008392333984}, "flags": {}, "order": 60, "mode": 0, "inputs": [{"name": "a", "type": "INT,FLOAT,IMAGE,LATENT", "link": 790}, {"name": "b", "type": "INT,FLOAT,IMAGE,LATENT", "link": 791}, {"name": "c", "type": "INT,FLOAT,IMAGE,LATENT", "link": null}], "outputs": [{"name": "INT", "type": "INT", "links": [782, 785], "shape": 3, "slot_index": 0}, {"name": "FLOAT", "type": "FLOAT", "links": null, "shape": 3}], "title": "Steps (Math Expression \\ud83d\\udc0d)", "properties": {"Node name for S&R": "MathExpression|pysssss"}, "widgets_values": ["a * b"], "color": "#432", "bgcolor": "#653"}, {"id": 434, "type": "MathExpression|pysssss", "pos": [5190, 1480], "size": {"0": 218.39999389648438, "1": 116.00003051757812}, "flags": {}, "order": 119, "mode": 0, "inputs": [{"name": "a", "type": "INT,FLOAT,IMAGE,LATENT", "link": 792}, {"name": "b", "type": "INT,FLOAT,IMAGE,LATENT", "link": 794}, {"name": "c", "type": "INT,FLOAT,IMAGE,LATENT", "link": 782}], "outputs": [{"name": "INT", "type": "INT", "links": [788], "shape": 3, "slot_index": 0}, {"name": "FLOAT", "type": "FLOAT", "links": null, "shape": 3}], "title": "Steps (Math Expression \\ud83d\\udc0d)", "properties": {"Node name for S&R": "MathExpression|pysssss"}, "widgets_values": ["a.width * b / c"], "color": "#432", "bgcolor": "#653"}, {"id": 188, "type": "ImpactFloat", "pos": [4932, 1067], "size": {"0": 285.6000061035156, "1": 58}, "flags": {}, "order": 40, "mode": 0, "outputs": [{"name": "FLOAT", "type": "FLOAT", "links": [340, 790], "shape": 3, "slot_index": 0}], "title": "Hires Fix Upscale by (ImpactFloat)", "properties": {"Node name for S&R": "ImpactFloat"}, "widgets_values": [1.5], "color": "#322", "bgcolor": "#533"}, {"id": 435, "type": "MathExpression|pysssss", "pos": [5190, 1640], "size": {"0": 218.39999389648438, "1": 116.00009155273438}, "flags": {}, "order": 120, "mode": 0, "inputs": [{"name": "a", "type": "INT,FLOAT,IMAGE,LATENT", "link": 793}, {"name": "b", "type": "INT,FLOAT,IMAGE,LATENT", "link": 795}, {"name": "c", "type": "INT,FLOAT,IMAGE,LATENT", "link": 785}], "outputs": [{"name": "INT", "type": "INT", "links": [789], "shape": 3, "slot_index": 0}, {"name": "FLOAT", "type": "FLOAT", "links": null, "shape": 3}], "title": "Steps (Math Expression \\ud83d\\udc0d)", "properties": {"Node name for S&R": "MathExpression|pysssss"}, "widgets_values": ["a.height * b / c"], "color": "#432", "bgcolor": "#653"}, {"id": 199, "type": "ImpactFloat", "pos": [5381, 1060], "size": {"0": 252, "1": 58}, "flags": {}, "order": 41, "mode": 0, "outputs": [{"name": "FLOAT", "type": "FLOAT", "links": [343, 791, 794, 795], "shape": 3, "slot_index": 0}], "title": "Tiled upscale By (ImpactFloat)", "properties": {"Node name for S&R": "ImpactFloat"}, "widgets_values": [1.5], "color": "#322", "bgcolor": "#533"}, {"id": 177, "type": "CR Upscale Image", "pos": [4925, 1175], "size": {"0": 315, "1": 222}, "flags": {}, "order": 118, "mode": 0, "inputs": [{"name": "image", "type": "IMAGE", "link": 327}, {"name": "rescale_factor", "type": "FLOAT", "link": 340, "widget": {"name": "rescale_factor"}, "slot_index": 1}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [328, 792, 793], "shape": 3, "slot_index": 0}, {"name": "show_help", "type": "STRING", "links": null, "shape": 3}], "properties": {"Node name for S&R": "CR Upscale Image"}, "widgets_values": ["RealESRGAN_x4plus.pth", "rescale", 2, 1024, "lanczos", "true", 8], "color": "#432", "bgcolor": "#653"}, {"id": 185, "type": "Note", "pos": [4920, 949], "size": {"0": 297.30426025390625, "1": 58}, "flags": {}, "order": 42, "mode": 0, "properties": {"text": ""}, "widgets_values": ["Hires\\n"], "color": "#432", "bgcolor": "#653"}, {"id": 17, "type": "UltimateSDUpscale", "pos": [5532, 1285], "size": [261.2696228027344, 591.5228881835938], "flags": {}, "order": 121, "mode": 0, "inputs": [{"name": "image", "type": "IMAGE", "link": 328, "slot_index": 0}, {"name": "model", "type": "MODEL", "link": 146, "slot_index": 1}, {"name": "positive", "type": "CONDITIONING", "link": 147, "slot_index": 2}, {"name": "negative", "type": "CONDITIONING", "link": 148, "slot_index": 3}, {"name": "vae", "type": "VAE", "link": null, "slot_index": 4}, {"name": "upscale_model", "type": "UPSCALE_MODEL", "link": 562, "slot_index": 5}, {"name": "cfg", "type": "FLOAT", "link": null, "widget": {"name": "cfg"}, "slot_index": 6}, {"name": "seed", "type": "INT", "link": null, "widget": {"name": "seed"}, "slot_index": 7}, {"name": "upscale_by", "type": "FLOAT", "link": 343, "widget": {"name": "upscale_by"}, "slot_index": 8}, {"name": "steps", "type": "INT", "link": 554, "widget": {"name": "steps"}, "slot_index": 9}, {"name": "sampler_name", "type": "COMBO", "link": null, "widget": {"name": "sampler_name"}, "slot_index": 10}, {"name": "tile_width", "type": "INT", "link": 788, "widget": {"name": "tile_width"}}, {"name": "tile_height", "type": "INT", "link": 789, "widget": {"name": "tile_height"}}], "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [150], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "UltimateSDUpscale"}, "widgets_values": [2, 625375473977213, "randomize", 15, 7, "ddim", "normal", 0.3, "Linear", 1024, 1024, 16, 32, "None", 0.3, 64, 16, 16, false, false], "color": "#432", "bgcolor": "#653"}, {"id": 154, "type": "Reroute", "pos": [563.1763993580237, 1002.4598206522189], "size": [82, 26], "flags": {}, "order": 117, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 676, "slot_index": 0}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}, "color": "#322", "bgcolor": "#533"}, {"id": 437, "type": "Seed Everywhere", "pos": [2511, 293], "size": [245.8319361328122, 82], "flags": {}, "order": 43, "mode": 0, "outputs": [{"name": "INT", "type": "INT", "links": null, "shape": 3}], "properties": {"group_restricted": false, "color_restricted": false, "Node name for S&R": "Seed Everywhere"}, "widgets_values": [981886709860244, "randomize"], "color": "#322", "bgcolor": "#533"}, {"id": 39, "type": "Reroute", "pos": [568, 1102], "size": [82, 26], "flags": {}, "order": 105, "mode": 0, "inputs": [{"name": "", "type": "*", "link": 257, "slot_index": 0}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [797], "slot_index": 0}], "properties": {"showOutputText": true, "horizontal": false}, "color": "#322", "bgcolor": "#533"}, {"id": 105, "type": "CLIPVisionLoader", "pos": [-1560, 810], "size": {"0": 315, "1": 58}, "flags": {}, "order": 44, "mode": 4, "outputs": [{"name": "CLIP_VISION", "type": "CLIP_VISION", "links": [778], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "CLIPVisionLoader"}, "widgets_values": ["sdxl_model.safetensors"]}, {"id": 103, "type": "IPAdapterModelLoader", "pos": [-1570, 700], "size": {"0": 315, "1": 58}, "flags": {}, "order": 45, "mode": 4, "outputs": [{"name": "IPADAPTER", "type": "IPADAPTER", "links": [777], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "IPAdapterModelLoader"}, "widgets_values": ["ip-adapter_sdxl.bin"]}, {"id": 433, "type": "IPAdapterAdvanced", "pos": [-1160, 670], "size": {"0": 315, "1": 278}, "flags": {}, "order": 110, "mode": 4, "inputs": [{"name": "model", "type": "MODEL", "link": 779}, {"name": "ipadapter", "type": "IPADAPTER", "link": 777}, {"name": "image", "type": "IMAGE", "link": 780}, {"name": "image_negative", "type": "IMAGE", "link": null}, {"name": "attn_mask", "type": "MASK", "link": null}, {"name": "clip_vision", "type": "CLIP_VISION", "link": 778}], "outputs": [{"name": "MODEL", "type": "MODEL", "links": [781], "shape": 3, "slot_index": 0}], "properties": {"Node name for S&R": "IPAdapterAdvanced"}, "widgets_values": [1, "composition (SDXL)", "concat", 0, 1, "V only"]}, {"id": 259, "type": "PreviewImage", "pos": [3262, 0], "size": {"0": 681.5069580078125, "1": 635.6546020507812}, "flags": {}, "order": 111, "mode": 0, "inputs": [{"name": "images", "type": "IMAGE", "link": 526, "slot_index": 0}], "properties": {"Node name for S&R": "PreviewImage"}, "color": "#232", "bgcolor": "#353"}, {"id": 100, "type": "PreviewImage", "pos": [3993, -21], "size": {"0": 610.2532958984375, "1": 649.3406982421875}, "flags": {}, "order": 124, "mode": 0, "inputs": [{"name": "images", "type": "IMAGE", "link": 183}], "properties": {"Node name for S&R": "PreviewImage"}, "color": "#432", "bgcolor": "#653"}, {"id": 10, "type": "CheckpointLoaderSimple", "pos": [-2159.69227286357, 1142.2694072099705], "size": {"0": 315, "1": 98}, "flags": {}, "order": 46, "mode": 0, "outputs": [{"name": "MODEL", "type": "MODEL", "links": [773], "slot_index": 0}, {"name": "CLIP", "type": "CLIP", "links": [29], "slot_index": 1}, {"name": "VAE", "type": "VAE", "links": [628], "slot_index": 2}], "properties": {"Node name for S&R": "CheckpointLoaderSimple"}, "widgets_values": ["animagine-xl-3.0.safetensors"], "color": "#322", "bgcolor": "#533"}, {"id": 292, "type": "DetailerForEachPipe", "pos": [3927, 1049], "size": {"0": 287.20001220703125, "1": 524}, "flags": {}, "order": 107, "mode": 0, "inputs": [{"name": "image", "type": "IMAGE", "link": 511}, {"name": "segs", "type": "SEGS", "link": 494}, {"name": "basic_pipe", "type": "BASIC_PIPE", "link": 512}, {"name": "detailer_hook", "type": "DETAILER_HOOK", "link": null}, {"name": "refiner_basic_pipe_opt", "type": "BASIC_PIPE", "link": null, "slot_index": 4}, {"name": "seed", "type": "INT", "link": null, "widget": {"name": "seed"}}, {"name": "steps", "type": "INT", "link": 498, "widget": {"name": "steps"}}, {"name": "cfg", "type": "FLOAT", "link": null, "widget": {"name": "cfg"}}, {"name": "sampler_name", "type": "COMBO", "link": null, "widget": {"name": "sampler_name"}, "slot_index": 8}], "outputs": [{"name": "image", "type": "IMAGE", "links": [526, 527], "shape": 3, "slot_index": 0}, {"name": "segs", "type": "SEGS", "links": [], "shape": 3, "slot_index": 1}, {"name": "basic_pipe", "type": "BASIC_PIPE", "links": [], "shape": 3, "slot_index": 2}, {"name": "cnet_images", "type": "IMAGE", "links": [], "shape": 6, "slot_index": 3}], "title": "Hand Detailer (SEGS/pipe)", "properties": {"Node name for S&R": "DetailerForEachPipe"}, "widgets_values": [512, true, 1024, 859129498384793, "randomize", 20, 8, "euler", "normal", 0.5, 5, true, false, "", 0.1, 1, false, 10], "color": "#232", "bgcolor": "#353"}, {"id": 299, "type": "Preview Chooser", "pos": [438, 62], "size": [579.5999755859375, 651.2097778320312], "flags": {}, "order": 82, "mode": 0, "inputs": [{"name": "images", "type": "IMAGE", "link": 686}, {"name": "latents", "type": "LATENT", "link": null}, {"name": "masks", "type": "MASK", "link": null}], "outputs": [{"name": "images", "type": "IMAGE", "links": [586], "shape": 3, "slot_index": 0}, {"name": "latent", "type": "LATENT", "links": [], "shape": 3, "slot_index": 1}, {"name": "masks", "type": "MASK", "links": null, "shape": 3}, {"name": "selected", "type": "STRING", "links": null, "shape": 3}], "title": "Select Good Images and [ Progress selected images ] (Preview Chooser)", "properties": {"Node name for S&R": "Preview Chooser"}, "widgets_values": ["Always pause", 1, "", ""], "color": "#233", "bgcolor": "#355", "locked": true}], "links": [[27, 25, 0, 22, 0, "MODEL"], [28, 25, 1, 22, 1, "CLIP"], [29, 10, 1, 24, 0, "CLIP"], [32, 22, 0, 29, 0, "MODEL"], [33, 22, 1, 29, 1, "CLIP"], [34, 29, 0, 30, 0, "MODEL"], [35, 29, 1, 30, 1, "CLIP"], [37, 30, 0, 33, 0, "MODEL"], [38, 30, 1, 33, 1, "CLIP"], [66, 52, 0, 50, 0, "BBOX_DETECTOR"], [68, 55, 0, 53, 0, "BBOX_DETECTOR"], [96, 33, 0, 61, 0, "MODEL"], [97, 33, 1, 61, 1, "CLIP"], [146, 80, 0, 17, 1, "MODEL"], [147, 80, 3, 17, 2, "CONDITIONING"], [148, 80, 4, 17, 3, "CONDITIONING"], [150, 17, 0, 81, 0, "*"], [151, 81, 0, 78, 0, "*"], [161, 91, 0, 9, 0, "IMAGE"], [173, 61, 0, 96, 0, "MODEL"], [174, 61, 1, 96, 1, "CLIP"], [175, 96, 0, 67, 0, "*"], [183, 81, 0, 100, 0, "IMAGE"], [199, 114, 0, 110, 2, "CONTROL_NET"], [215, 88, 0, 89, 0, "*"], [233, 127, 0, 128, 2, "CONTROL_NET"], [257, 67, 0, 39, 0, "*"], [283, 67, 0, 142, 0, "*"], [284, 102, 0, 149, 0, "*"], [297, 160, 0, 110, 0, "CONDITIONING"], [298, 161, 0, 110, 1, "CONDITIONING"], [301, 136, 0, 162, 0, "*"], [302, 135, 0, 163, 0, "*"], [303, 162, 0, 46, 3, "CONDITIONING"], [304, 163, 0, 46, 4, "CONDITIONING"], [311, 102, 0, 167, 0, "*"], [312, 167, 0, 101, 0, "IMAGE"], [313, 101, 0, 111, 0, "*"], [316, 124, 0, 170, 0, "IMAGE"], [317, 170, 0, 110, 3, "IMAGE"], [318, 170, 0, 119, 0, "IMAGE"], [326, 70, 0, 178, 0, "*"], [327, 178, 0, 177, 0, "IMAGE"], [328, 177, 0, 17, 0, "IMAGE"], [336, 182, 0, 183, 0, "*"], [337, 183, 0, 124, 0, "*"], [338, 102, 0, 184, 0, "*"], [339, 184, 0, 182, 0, "*"], [340, 188, 0, 177, 1, "FLOAT"], [343, 199, 0, 17, 8, "FLOAT"], [439, 278, 0, 279, 0, "INT,FLOAT,IMAGE,LATENT"], [494, 53, 0, 292, 1, "SEGS"], [498, 279, 0, 292, 6, "INT"], [505, 50, 0, 294, 1, "SEGS"], [508, 279, 0, 294, 6, "INT"], [511, 294, 0, 292, 0, "IMAGE"], [512, 294, 2, 292, 2, "BASIC_PIPE"], [526, 292, 0, 259, 0, "IMAGE"], [527, 292, 0, 70, 0, "*"], [535, 59, 0, 298, 0, "*"], [537, 298, 0, 50, 1, "IMAGE"], [538, 298, 0, 53, 1, "IMAGE"], [554, 313, 0, 17, 9, "INT"], [559, 278, 0, 313, 0, "INT,FLOAT,IMAGE,LATENT"], [562, 190, 0, 17, 5, "UPSCALE_MODEL"], [564, 300, 0, 59, 0, "*"], [567, 278, 0, 319, 3, "INT"], [575, 89, 0, 319, 1, "LATENT"], [576, 78, 0, 91, 0, "*"], [577, 321, 0, 88, 0, "INT"], [586, 299, 0, 300, 0, "IMAGE"], [608, 44, 0, 346, 0, "STRING"], [609, 173, 0, 346, 1, "STRING"], [610, 347, 0, 346, 2, "STRING"], [611, 346, 0, 31, 0, "STRING"], [613, 345, 0, 31, 2, "STRING"], [615, 281, 0, 359, 0, "COMBO"], [616, 110, 0, 360, 0, "CONDITIONING"], [617, 110, 1, 360, 1, "CONDITIONING"], [618, 360, 0, 128, 0, "CONDITIONING"], [619, 360, 1, 128, 1, "CONDITIONING"], [620, 121, 0, 360, 2, "CONTROL_NET"], [628, 10, 2, 363, 0, "VAE"], [633, 277, 0, 364, 0, "FLOAT"], [636, 46, 0, 366, 0, "BASIC_PIPE"], [640, 96, 1, 367, 0, "CLIP"], [653, 31, 0, 390, 0, "*"], [664, 124, 0, 400, 0, "IMAGE"], [665, 400, 0, 125, 0, "IMAGE"], [666, 400, 0, 360, 3, "IMAGE"], [667, 124, 0, 401, 0, "IMAGE"], [668, 401, 0, 128, 3, "IMAGE"], [670, 401, 0, 129, 0, "IMAGE"], [672, 128, 0, 136, 0, "*"], [673, 128, 1, 135, 0, "*"], [676, 141, 0, 154, 0, "*"], [680, 390, 0, 404, 1, "STRING"], [681, 392, 0, 405, 1, "STRING"], [682, 405, 0, 161, 0, "*"], [683, 404, 0, 160, 0, "*"], [684, 59, 0, 294, 0, "IMAGE"], [685, 319, 1, 406, 0, "LATENT"], [686, 406, 0, 299, 0, "IMAGE"], [687, 46, 0, 80, 0, "BASIC_PIPE"], [688, 10, 2, 17, 4, "VAE"], [689, 277, 0, 17, 6, "FLOAT"], [690, 281, 0, 17, 10, "COMBO"], [691, 25, 1, 46, 1, "CLIP"], [692, 10, 2, 46, 2, "VAE"], [693, 25, 1, 405, 0, "CLIP"], [694, 25, 1, 404, 0, "CLIP"], [695, 46, 0, 294, 2, "BASIC_PIPE"], [696, 46, 0, 294, 4, "BASIC_PIPE"], [697, 277, 0, 294, 7, "FLOAT"], [698, 281, 0, 294, 8, "COMBO"], [699, 46, 0, 292, 4, "BASIC_PIPE"], [700, 277, 0, 292, 7, "FLOAT"], [701, 281, 0, 292, 8, "COMBO"], [702, 46, 0, 319, 0, "BASIC_PIPE"], [703, 277, 0, 319, 4, "FLOAT"], [704, 281, 0, 319, 5, "COMBO"], [705, 10, 2, 406, 1, "VAE"], [706, 407, 0, 371, 0, "INT"], [707, 407, 1, 373, 0, "INT"], [708, 407, 0, 88, 1, "INT"], [709, 407, 1, 88, 2, "INT"], [710, 408, 0, 152, 0, "*"], [717, 152, 0, 31, 1, "STRING"], [752, 46, 0, 80, 0, "BASIC_PIPE"], [753, 10, 2, 17, 4, "VAE"], [754, 277, 0, 17, 6, "FLOAT"], [755, 281, 0, 17, 10, "COMBO"], [756, 429, 0, 46, 1, "CLIP"], [757, 10, 2, 46, 2, "VAE"], [758, 429, 0, 405, 0, "CLIP"], [759, 429, 0, 404, 0, "CLIP"], [760, 46, 0, 294, 2, "BASIC_PIPE"], [761, 46, 0, 294, 4, "BASIC_PIPE"], [762, 277, 0, 294, 7, "FLOAT"], [763, 281, 0, 294, 8, "COMBO"], [764, 46, 0, 292, 4, "BASIC_PIPE"], [765, 277, 0, 292, 7, "FLOAT"], [766, 281, 0, 292, 8, "COMBO"], [767, 46, 0, 319, 0, "BASIC_PIPE"], [768, 277, 0, 319, 4, "FLOAT"], [769, 281, 0, 319, 5, "COMBO"], [770, 10, 2, 406, 1, "VAE"], [773, 10, 0, 25, 0, "MODEL"], [774, 24, 0, 25, 1, "CLIP"], [775, 431, 0, 408, 0, "*"], [776, 432, 0, 392, 0, "*"], [777, 103, 0, 433, 1, "IPADAPTER"], [778, 105, 0, 433, 5, "CLIP_VISION"], [779, 142, 0, 433, 0, "MODEL"], [780, 149, 0, 433, 2, "IMAGE"], [781, 433, 0, 141, 0, "*"], [782, 436, 0, 434, 2, "INT,FLOAT,IMAGE,LATENT"], [785, 436, 0, 435, 2, "INT,FLOAT,IMAGE,LATENT"], [788, 434, 0, 17, 11, "INT"], [789, 435, 0, 17, 12, "INT"], [790, 188, 0, 436, 0, "INT,FLOAT,IMAGE,LATENT"], [791, 199, 0, 436, 1, "INT,FLOAT,IMAGE,LATENT"], [792, 177, 0, 434, 0, "INT,FLOAT,IMAGE,LATENT"], [793, 177, 0, 435, 0, "INT,FLOAT,IMAGE,LATENT"], [794, 199, 0, 434, 1, "INT,FLOAT,IMAGE,LATENT"], [795, 199, 0, 435, 1, "INT,FLOAT,IMAGE,LATENT"], [797, 39, 0, 46, 0, "MODEL"]], "groups": [{"title": "Detailer", "bounding": [2681, 955, 1660, 1166], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "LoRAs", "bounding": [-1117, 1063, 1515, 472], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "Load Checkpoint, VAE", "bounding": [-2212, 1061, 927, 334], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "Upscaler", "bounding": [4670, 910, 1172, 1009], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "Sampler", "bounding": [1227, 958, 1120, 476], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "Prompt", "bounding": [-317, -555, 690, 1312], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "ControlNet", "bounding": [-1161, 1671, 1743, 1501], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "IPAdapter", "bounding": [-1677, 614, 1122, 346], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "From IPAdapter", "bounding": [475, 956, 199, 87], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "Tagger", "bounding": [-1178, 10, 632, 365], "color": "#3f789e", "font_size": 24, "locked": false}, {"title": "Normal", "bounding": [538, 1063, 140, 80], "color": "#3f789e", "font_size": 24, "locked": false}], "config": {}, "extra": {"workspace_info": {"id": "be24275b-e2d2-481e-afc8-ac1a88191d10", "name": "v04_Animagine_xl_v3_lora_detailer_upscaler_IPAdapter_control_net_gacha"}}, "version": 0.4}
`}),t[6]||(t[6]=e("h2",{id:"obsidian-canvas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#obsidian-canvas"},[e("span",null,"obsidian canvas")])],-1)),n(o,{type:"obcanvas",data:`{
	"nodes":[
		{"id":"d1acdb5136ffb1f1","type":"text","text":"Test1\\n","x":-125,"y":-30,"width":250,"height":60},
		{"id":"f7dc36d69da1bb36","type":"text","text":"Test2\\n","x":180,"y":-30,"width":250,"height":60},
		{"id":"d223d45d7cf1faa8","type":"text","text":"Test3.2","x":80,"y":280,"width":250,"height":60},
		{"id":"066f190357a8ac5f","type":"text","text":"Test3\\n","x":-220,"y":160,"width":250,"height":60},
		{"id":"cfdb2b6846698ec7","type":"text","text":"Test2\\n","x":460,"y":-180,"width":250,"height":60},
		{"id":"da124d4bfedb7ab0","type":"text","text":"Test2\\n","x":540,"y":10,"width":250,"height":60},
		{"id":"2e02c254f91e666a","type":"text","text":"Test3.1","x":260,"y":160,"width":250,"height":60},
		{"id":"b5475e35c5ba15f4","type":"text","text":"Test1\\n","x":680,"y":190,"width":250,"height":60}
	],
	"edges":[
		{"id":"fc3f1bc43902aac9","fromNode":"d1acdb5136ffb1f1","fromSide":"right","toNode":"f7dc36d69da1bb36","toSide":"left"},
		{"id":"09cc954434113e5a","fromNode":"d1acdb5136ffb1f1","fromSide":"right","toNode":"066f190357a8ac5f","toSide":"left"},
		{"id":"770fdad7f9ca8f06","fromNode":"066f190357a8ac5f","fromSide":"right","toNode":"2e02c254f91e666a","toSide":"left"},
		{"id":"b053d3eed71e35b8","fromNode":"066f190357a8ac5f","fromSide":"right","toNode":"d223d45d7cf1faa8","toSide":"left"},
		{"id":"c71cb232fe436df4","fromNode":"da124d4bfedb7ab0","fromSide":"right","toNode":"b5475e35c5ba15f4","toSide":"left"},
		{"id":"37f97fe5ec9a9498","fromNode":"2e02c254f91e666a","fromSide":"right","toNode":"b5475e35c5ba15f4","toSide":"left"},
		{"id":"fc3e1854c94ff7b5","fromNode":"f7dc36d69da1bb36","fromSide":"right","toNode":"da124d4bfedb7ab0","toSide":"left"},
		{"id":"4b41ab105fb46ff6","fromNode":"f7dc36d69da1bb36","fromSide":"right","toNode":"cfdb2b6846698ec7","toSide":"left"}
	]
}
`}),t[7]||(t[7]=e("h2",{id:"list-grammar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#list-grammar"},[e("span",null,"list grammar")])],-1)),n(p,{id:"18",data:[{id:"Plugin effect (插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:l,isActive:a})=>t[0]||(t[0]=[s("Plugin effect (插件效果)")])),title1:i(({value:l,isActive:a})=>t[1]||(t[1]=[s("md source code (md源码)")])),tab0:i(({value:l,isActive:a})=>[n(o,{type:"list",data:`- nodes
  - node1:KSample
    - Latent, o
    - model, i
    - positive, i
    - negative, i
    - Latent, i
    - seed,
    - control_after_generate,, randomize
    - steps,, 20
    - CFG,, 8.0
    - sampler_name,, euler
    - scheduler,, normal
    - denoise,, 1.00
    - io defaultTest, i , test
    - io defaultTest, o, test
    - t1:noValueTest,
    - t2:,, noKeyTest
      mul lines test
  - node2:KSample
    - 潜空间, o
    - 模型, i
    - 正面条件, i
    - 负面条件, i
    - 潜空间, i
    - 种子,
    - 运行后操作,
    - 步数,
    - CFG,
    - 采样器/采样方法,
    - 调度器,
    - 降噪,
  - translate
- edges
  - node1,Latent, translate,l
  - translate,r, node2, 潜空间
`})]),tab1:i(({value:l,isActive:a})=>t[2]||(t[2]=[e("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"nodeflow-list"),s(`
`),e("span",{class:"token code-block language-nodeflow-list language-nodeflow-list"},`- nodes
  - node1:KSample
    - Latent, o
    - model, i
    - positive, i
    - negative, i
    - Latent, i
    - seed,
    - control_after_generate,, randomize
    - steps,, 20
    - CFG,, 8.0
    - sampler_name,, euler
    - scheduler,, normal
    - denoise,, 1.00
    - io defaultTest, i , test
    - io defaultTest, o, test
    - t1:noValueTest,
    - t2:,, noKeyTest
      mul lines test
  - node2:KSample
    - 潜空间, o
    - 模型, i
    - 正面条件, i
    - 负面条件, i
    - 潜空间, i
    - 种子,
    - 运行后操作,
    - 步数,
    - CFG,
    - 采样器/采样方法,
    - 调度器,
    - 降噪,
  - translate
- edges
  - node1,Latent, translate,l
  - translate,r, node2, 潜空间`),s(`
`),e("span",{class:"token punctuation"},"```")]),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),t[8]||(t[8]=e("h2",{id:"vueflow-reactflow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vueflow-reactflow"},[e("span",null,"vueflow/reactflow")])],-1)),n(o,{type:"vueflow",data:`{
  "nodes": [
    {"id": "1", "type": "input", "position": {"x": 250, "y": 5}, "data": {"label": "Node 31"}},
    {"id": "2", "position": {"x": 100, "y": 100}, "data": {"label": "Node 32"}},
    {"id": "3", "type": "output", "position": {"x": 400, "y": 200}, "data": {"label": "Node 33"}},
    {"id": "4", "type": "special", "position": {"x": 600, "y": 100}, "data": {"label": "Node 34", "hello": "world"}}
  ],
  "edges": [
    {"id": "e1->2", "source": "1", "target": "2"},
    {"id": "e2->3", "source": "2", "target": "3", "animated": true},
    {"id": "e3->4", "type": "special", "source": "3", "target": "4", "data": {"hello": "world"}}
  ]
}
`}),t[9]||(t[9]=e("h2",{id:"github-action-workflow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-action-workflow"},[e("span",null,"Github Action Workflow")])],-1)),t[10]||(t[10]=e("p",null,"(use list grammer)",-1)),t[11]||(t[11]=e("p",null,"This is an example workflow for my personal website (这是我个人网站的一个示例工作流程)",-1)),n(o,{type:"list",data:`- nodes
  - build
  - report-build-status
  - deploy
    - https://linczero.github.io, v
- edges
  - build,r, report-build-status,l
  - build,r, deploy,l
`})])}const f=d(g,[["render",c],["__file","README.show.html.vue"]]),N=JSON.parse('{"path":"/MdNote_Public/ProductDoc/Plugin/NodeFlow/README.show.html","title":"README.show","lang":"zh-CN","frontmatter":{"description":"README.show comfyui - samply","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/ProductDoc/Plugin/NodeFlow/README.show.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"README.show"}],["meta",{"property":"og:description","content":"README.show comfyui - samply"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"README.show\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"README.show","slug":"readme-show","link":"#readme-show","children":[{"level":2,"title":"comfyui - samply","slug":"comfyui-samply","link":"#comfyui-samply","children":[]},{"level":2,"title":"comfyui - complex","slug":"comfyui-complex","link":"#comfyui-complex","children":[]},{"level":2,"title":"obsidian canvas","slug":"obsidian-canvas","link":"#obsidian-canvas","children":[]},{"level":2,"title":"list grammar","slug":"list-grammar","link":"#list-grammar","children":[]},{"level":2,"title":"vueflow/reactflow","slug":"vueflow-reactflow","link":"#vueflow-reactflow","children":[]},{"level":2,"title":"Github Action Workflow","slug":"github-action-workflow","link":"#github-action-workflow","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":29.89,"words":8967},"filePathRelative":"MdNote_Public/ProductDoc/Plugin/NodeFlow/README.show.md","excerpt":"\\n<h2>comfyui - samply</h2>\\n","autoDesc":true}');export{f as comp,N as data};

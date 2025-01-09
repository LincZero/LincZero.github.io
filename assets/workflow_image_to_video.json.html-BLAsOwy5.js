import{_ as e,c as o,b as i,o as t,r as a}from"./app-Bf7apqQc.js";const s={};function p(d,l){const n=a("VueFlow");return t(),o("div",null,[i(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 23,
  "last_link_id": 41,
  "nodes": [
    {
      "id": 14,
      "type": "VideoLinearCFGGuidance",
      "pos": [
        487.799932861328,
        265.6999450683599
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 23
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            39
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VideoLinearCFGGuidance"
      },
      "widgets_values": [
        1
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        867.7999328613287,
        375.6999450683598
      ],
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
          "link": 39
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 40
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 17
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 18
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        237514639057514,
        "randomize",
        20,
        2.5,
        "euler",
        "karras",
        1
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1207.799932861331,
        375.6999450683598
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
          "name": "samples",
          "type": "LATENT",
          "link": 7
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 26
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            10
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 10,
      "type": "SaveAnimatedWEBP",
      "pos": [
        1459,
        376
      ],
      "size": {
        "0": 741.6685791015625,
        "1": 564.5909423828125
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 10
        }
      ],
      "properties": {
        "Node name for S&R": "SaveAnimatedWEBP"
      },
      "widgets_values": [
        "ComfyUI",
        10,
        false,
        85,
        "default"
      ]
    },
    {
      "id": 15,
      "type": "ImageOnlyCheckpointLoader",
      "pos": [
        55,
        267
      ],
      "size": {
        "0": 369.6000061035156,
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
            23
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP_VISION",
          "type": "CLIP_VISION",
          "links": [
            24
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            25,
            26
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "ImageOnlyCheckpointLoader"
      },
      "widgets_values": [
        "svd.safetensors"
      ]
    },
    {
      "id": 12,
      "type": "SVD_img2vid_Conditioning",
      "pos": [
        487.799932861328,
        395.6999450683598
      ],
      "size": {
        "0": 315,
        "1": 218
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip_vision",
          "type": "CLIP_VISION",
          "link": 24
        },
        {
          "name": "init_image",
          "type": "IMAGE",
          "link": 41,
          "slot_index": 1
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 25
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            40
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            17
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "latent",
          "type": "LATENT",
          "links": [
            18
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "SVD_img2vid_Conditioning"
      },
      "widgets_values": [
        1024,
        576,
        14,
        127,
        6,
        0
      ]
    },
    {
      "id": 23,
      "type": "LoadImage",
      "pos": [
        106,
        441
      ],
      "size": {
        "0": 315,
        "1": 314.0000305175781
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            41
          ],
          "shape": 3
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "mountains.png",
        "image"
      ]
    }
  ],
  "links": [
    [
      7,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      10,
      8,
      0,
      10,
      0,
      "IMAGE"
    ],
    [
      17,
      12,
      1,
      3,
      2,
      "CONDITIONING"
    ],
    [
      18,
      12,
      2,
      3,
      3,
      "LATENT"
    ],
    [
      23,
      15,
      0,
      14,
      0,
      "MODEL"
    ],
    [
      24,
      15,
      1,
      12,
      0,
      "CLIP_VISION"
    ],
    [
      25,
      15,
      2,
      12,
      2,
      "VAE"
    ],
    [
      26,
      15,
      2,
      8,
      1,
      "VAE"
    ],
    [
      39,
      14,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      40,
      12,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      41,
      23,
      0,
      12,
      1,
      "IMAGE"
    ]
  ],
  "groups": [
    {
      "title": "Image to Video",
      "bounding": [
        478,
        192,
        954,
        478
      ],
      "color": "#8A8",
      "font_size": 24
    }
  ],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const m=e(s,[["render",p],["__file","workflow_image_to_video.json.html.vue"]]),_=JSON.parse('{"path":"/MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 23, \\"last_link_id\\": 41, \\"nodes\\": [ { \\"id\\": 14, \\"type\\": \\"VideoLinearCFGGuidance\\", \\"pos\\": [ 487.799932861328, 265.6999450683599 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 },...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 23, \\"last_link_id\\": 41, \\"nodes\\": [ { \\"id\\": 14, \\"type\\": \\"VideoLinearCFGGuidance\\", \\"pos\\": [ 487.799932861328, 265.6999450683599 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 },..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","excerpt":"<p>{\\n\\"last_node_id\\": 23,\\n\\"last_link_id\\": 41,\\n\\"nodes\\": [\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"VideoLinearCFGGuidance\\",\\n\\"pos\\": [\\n487.799932861328,\\n265.6999450683599\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 23\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n39\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VideoLinearCFGGuidance\\"\\n},\\n\\"widgets_values\\": [\\n1\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n867.7999328613287,\\n375.6999450683598\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 39\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 40\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 17\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 18\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n237514639057514,\\n\\"randomize\\",\\n20,\\n2.5,\\n\\"euler\\",\\n\\"karras\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n1207.799932861331,\\n375.6999450683598\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 26\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n10\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"SaveAnimatedWEBP\\",\\n\\"pos\\": [\\n1459,\\n376\\n],\\n\\"size\\": {\\n\\"0\\": 741.6685791015625,\\n\\"1\\": 564.5909423828125\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 10\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveAnimatedWEBP\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\",\\n10,\\nfalse,\\n85,\\n\\"default\\"\\n]\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"ImageOnlyCheckpointLoader\\",\\n\\"pos\\": [\\n55,\\n267\\n],\\n\\"size\\": {\\n\\"0\\": 369.6000061035156,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n23\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP_VISION\\",\\n\\"type\\": \\"CLIP_VISION\\",\\n\\"links\\": [\\n24\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n25,\\n26\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageOnlyCheckpointLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"svd.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"SVD_img2vid_Conditioning\\",\\n\\"pos\\": [\\n487.799932861328,\\n395.6999450683598\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 218\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip_vision\\",\\n\\"type\\": \\"CLIP_VISION\\",\\n\\"link\\": 24\\n},\\n{\\n\\"name\\": \\"init_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 41,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 25\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n40\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n17\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"latent\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n18\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SVD_img2vid_Conditioning\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n576,\\n14,\\n127,\\n6,\\n0\\n]\\n},\\n{\\n\\"id\\": 23,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n106,\\n441\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 314.0000305175781\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n41\\n],\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"mountains.png\\",\\n\\"image\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n10,\\n8,\\n0,\\n10,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n17,\\n12,\\n1,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n18,\\n12,\\n2,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n23,\\n15,\\n0,\\n14,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n24,\\n15,\\n1,\\n12,\\n0,\\n\\"CLIP_VISION\\"\\n],\\n[\\n25,\\n15,\\n2,\\n12,\\n2,\\n\\"VAE\\"\\n],\\n[\\n26,\\n15,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n39,\\n14,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n40,\\n12,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n41,\\n23,\\n0,\\n12,\\n1,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Image to Video\\",\\n\\"bounding\\": [\\n478,\\n192,\\n954,\\n478\\n],\\n\\"color\\": \\"#8A8\\",\\n\\"font_size\\": 24\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","value":{"title":"workflow_image_to_video.json","path":"MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,_ as data};

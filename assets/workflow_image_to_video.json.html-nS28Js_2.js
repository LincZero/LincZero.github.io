import{_ as r,e,h as b,r as o,o as i}from"./app-DAzTxd7G.js";const t={};function a(s,p){const n=o("VueFlow");return i(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const l=r(t,[["render",a],["__file","workflow_image_to_video.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json.html","title":"workflow_image_to_video.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 23, \\"last_link_id\\": 41, \\"nodes\\": [ { \\"id\\": 14, \\"type\\": \\"VideoLinearCFGGuidance\\", \\"pos\\": [ 487.799932861328, 265.6999450683599 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 },...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 23, \\"last_link_id\\": 41, \\"nodes\\": [ { \\"id\\": 14, \\"type\\": \\"VideoLinearCFGGuidance\\", \\"pos\\": [ 487.799932861328, 265.6999450683599 ], \\"size\\": { \\"0\\": 315, \\"1\\": 58 },..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 23,<br>\\n\\"last_link_id\\": 41,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"VideoLinearCFGGuidance\\",<br>\\n\\"pos\\": [<br>\\n487.799932861328,<br>\\n265.6999450683599<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 23<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n39<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VideoLinearCFGGuidance\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n867.7999328613287,<br>\\n375.6999450683598<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 262<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 39<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 40<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 17<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 18<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n237514639057514,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n2.5,<br>\\n\\"euler\\",<br>\\n\\"karras\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n1207.799932861331,<br>\\n375.6999450683598<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 7<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 26<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n10<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 10,<br>\\n\\"type\\": \\"SaveAnimatedWEBP\\",<br>\\n\\"pos\\": [<br>\\n1459,<br>\\n376<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 741.6685791015625,<br>\\n\\"1\\": 564.5909423828125<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 10<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveAnimatedWEBP\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\",<br>\\n10,<br>\\nfalse,<br>\\n85,<br>\\n\\"default\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 15,<br>\\n\\"type\\": \\"ImageOnlyCheckpointLoader\\",<br>\\n\\"pos\\": [<br>\\n55,<br>\\n267<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 369.6000061035156,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n23<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP_VISION\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"links\\": [<br>\\n24<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n25,<br>\\n26<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageOnlyCheckpointLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"svd.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"SVD_img2vid_Conditioning\\",<br>\\n\\"pos\\": [<br>\\n487.799932861328,<br>\\n395.6999450683598<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 218<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip_vision\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"link\\": 24<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"init_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 41,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 25<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n40<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n17<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n18<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SVD_img2vid_Conditioning\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n576,<br>\\n14,<br>\\n127,<br>\\n6,<br>\\n0<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 23,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n106,<br>\\n441<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 314.0000305175781<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n41<br>\\n],<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"mountains.png\\",<br>\\n\\"image\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n10,<br>\\n8,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n17,<br>\\n12,<br>\\n1,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n18,<br>\\n12,<br>\\n2,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n23,<br>\\n15,<br>\\n0,<br>\\n14,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n24,<br>\\n15,<br>\\n1,<br>\\n12,<br>\\n0,<br>\\n\\"CLIP_VISION\\"<br>\\n],<br>\\n[<br>\\n25,<br>\\n15,<br>\\n2,<br>\\n12,<br>\\n2,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n26,<br>\\n15,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n39,<br>\\n14,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n40,<br>\\n12,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n41,<br>\\n23,<br>\\n0,<br>\\n12,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [<br>\\n{<br>\\n\\"title\\": \\"Image to Video\\",<br>\\n\\"bounding\\": [<br>\\n478,<br>\\n192,<br>\\n954,<br>\\n478<br>\\n],<br>\\n\\"color\\": \\"#8A8\\",<br>\\n\\"font_size\\": 24<br>\\n}<br>\\n],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","value":{"title":"workflow_image_to_video.json","path":"MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{l as comp,m as data};

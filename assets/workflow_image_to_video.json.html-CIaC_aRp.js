import{_ as o,c as t,b as u,r,o as q}from"./app-VJELzSjC.js";const e={};function b(i,a){const n=r("VueFlow");return q(),t("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const p=o(e,[["render",b]]),d=JSON.parse('{"path":"/MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json.html","title":"workflow_image_to_video.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 23, &quot;last_link_id&quot;: 41, &quot;nodes&quot;: [ { &quot;id&quot;: 14, &quot;type&quot;: &quot;VideoLinearCFGGuidance&quot;, &quot;pos&quot;: [...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 23, &quot;last_link_id&quot;: 41, &quot;nodes&quot;: [ { &quot;id&quot;: 14, &quot;type&quot;: &quot;VideoLinearCFGGuidance&quot;, &quot;pos&quot;: [..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 23,<br>\\n&quot;last_link_id&quot;: 41,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 14,<br>\\n&quot;type&quot;: &quot;VideoLinearCFGGuidance&quot;,<br>\\n&quot;pos&quot;: [<br>\\n487.799932861328,<br>\\n265.6999450683599<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 23<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n39<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VideoLinearCFGGuidance&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n867.7999328613287,<br>\\n375.6999450683598<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 262<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 39<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 40<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 17<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 18<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n237514639057514,<br>\\n&quot;randomize&quot;,<br>\\n20,<br>\\n2.5,<br>\\n&quot;euler&quot;,<br>\\n&quot;karras&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1207.799932861331,<br>\\n375.6999450683598<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 7<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 26<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n10<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 10,<br>\\n&quot;type&quot;: &quot;SaveAnimatedWEBP&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1459,<br>\\n376<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 741.6685791015625,<br>\\n&quot;1&quot;: 564.5909423828125<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 10<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SaveAnimatedWEBP&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;,<br>\\n10,<br>\\nfalse,<br>\\n85,<br>\\n&quot;default&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 15,<br>\\n&quot;type&quot;: &quot;ImageOnlyCheckpointLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n55,<br>\\n267<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 369.6000061035156,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n23<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;links&quot;: [<br>\\n24<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n25,<br>\\n26<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageOnlyCheckpointLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;svd.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;SVD_img2vid_Conditioning&quot;,<br>\\n&quot;pos&quot;: [<br>\\n487.799932861328,<br>\\n395.6999450683598<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 218<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip_vision&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;link&quot;: 24<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;init_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 41,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 25<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n40<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n17<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n18<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SVD_img2vid_Conditioning&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1024,<br>\\n576,<br>\\n14,<br>\\n127,<br>\\n6,<br>\\n0<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 23,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n106,<br>\\n441<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 314.0000305175781<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n41<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;mountains.png&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n10,<br>\\n8,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n17,<br>\\n12,<br>\\n1,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n18,<br>\\n12,<br>\\n2,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n23,<br>\\n15,<br>\\n0,<br>\\n14,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n24,<br>\\n15,<br>\\n1,<br>\\n12,<br>\\n0,<br>\\n&quot;CLIP_VISION&quot;<br>\\n],<br>\\n[<br>\\n25,<br>\\n15,<br>\\n2,<br>\\n12,<br>\\n2,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n26,<br>\\n15,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n39,<br>\\n14,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n40,<br>\\n12,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n41,<br>\\n23,<br>\\n0,<br>\\n12,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [<br>\\n{<br>\\n&quot;title&quot;: &quot;Image to Video&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n478,<br>\\n192,<br>\\n954,<br>\\n478<br>\\n],<br>\\n&quot;color&quot;: &quot;#8A8&quot;,<br>\\n&quot;font_size&quot;: 24<br>\\n}<br>\\n],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","value":{"title":"workflow_image_to_video.json","path":"MdNote_Other/ComfyUI_examples/video/workflow_image_to_video.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,d as data};

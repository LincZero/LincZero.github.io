import{_ as e,c as t,d as o,o as s,r as i}from"./app-D2u2UykU.js";const a={};function p(r,d){const n=i("VueFlow");return s(),t("div",null,[o(n,{type:"comfyui",data:`{
  "last_node_id": 15,
  "last_link_id": 16,
  "nodes": [
    {
      "id": 10,
      "type": "UNETLoader",
      "pos": [
        40,
        130
      ],
      "size": [
        320,
        60
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            10
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UNETLoader"
      },
      "widgets_values": [
        "sdxs.safetensors"
      ]
    },
    {
      "id": 12,
      "type": "CLIPLoader",
      "pos": [
        40,
        240
      ],
      "size": [
        320,
        80
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            12,
            13
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPLoader"
      },
      "widgets_values": [
        "cliph.safetensors",
        "stable_diffusion"
      ]
    },
    {
      "id": 11,
      "type": "VAELoader",
      "pos": [
        40,
        370
      ],
      "size": [
        320,
        60
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            11
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "vae-ft-mse-840000-ema-pruned.ckpt"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        380,
        280
      ],
      "size": [
        260,
        80
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 12
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "low quality"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        40,
        480
      ],
      "size": [
        320,
        110
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            2
          ],
          "slot_index": 0
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
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        40,
        640
      ],
      "size": [
        320,
        50
      ],
      "flags": {
        "collapsed": false
      },
      "order": 7,
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
          "link": 11
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            16
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        380,
        410
      ],
      "size": [
        260,
        280
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 10
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 4
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 6
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 2
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
        1031809444243948,
        "randomize",
        1,
        1,
        "euler",
        "sgm_uniform",
        1
      ]
    },
    {
      "id": 15,
      "type": "PreviewImage",
      "pos": [
        660,
        130
      ],
      "size": [
        540,
        560
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 16
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        380,
        130
      ],
      "size": [
        260,
        100
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 13
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            4
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "beautiful oil painting of a cute cat, high quality"
      ]
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
      10,
      10,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      11,
      11,
      0,
      8,
      1,
      "VAE"
    ],
    [
      12,
      12,
      0,
      7,
      0,
      "CLIP"
    ],
    [
      13,
      12,
      0,
      6,
      0,
      "CLIP"
    ],
    [
      16,
      8,
      0,
      15,
      0,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4
}
`})])}const m=e(a,[["render",p],["__file","SDXS-512-0.9【Zho】.json.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/ProjectNote/ComfyUI-Workflows-ZHO/SDXS-512-0.9%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 15, \\"last_link_id\\": 16, \\"nodes\\": [ { \\"id\\": 10, \\"type\\": \\"UNETLoader\\", \\"pos\\": [ 40, 130 ], \\"size\\": [ 320, 60 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\": [ ...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/ProjectNote/ComfyUI-Workflows-ZHO/SDXS-512-0.9%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 15, \\"last_link_id\\": 16, \\"nodes\\": [ { \\"id\\": 10, \\"type\\": \\"UNETLoader\\", \\"pos\\": [ 40, 130 ], \\"size\\": [ 320, 60 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\": [ ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/ProjectNote/ComfyUI-Workflows-ZHO/SDXS-512-0.9【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 15,\\n\\"last_link_id\\": 16,\\n\\"nodes\\": [\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"UNETLoader\\",\\n\\"pos\\": [\\n40,\\n130\\n],\\n\\"size\\": [\\n320,\\n60\\n],\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n10\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UNETLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"sdxs.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"CLIPLoader\\",\\n\\"pos\\": [\\n40,\\n240\\n],\\n\\"size\\": [\\n320,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n12,\\n13\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"cliph.safetensors\\",\\n\\"stable_diffusion\\"\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"VAELoader\\",\\n\\"pos\\": [\\n40,\\n370\\n],\\n\\"size\\": [\\n320,\\n60\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n11\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"vae-ft-mse-840000-ema-pruned.ckpt\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n380,\\n280\\n],\\n\\"size\\": [\\n260,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 12\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"low quality\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n40,\\n480\\n],\\n\\"size\\": [\\n320,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n512,\\n512,\\n1\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n40,\\n640\\n],\\n\\"size\\": [\\n320,\\n50\\n],\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 11\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n16\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n380,\\n410\\n],\\n\\"size\\": [\\n260,\\n280\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 10\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n1031809444243948,\\n\\"randomize\\",\\n1,\\n1,\\n\\"euler\\",\\n\\"sgm_uniform\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n660,\\n130\\n],\\n\\"size\\": [\\n540,\\n560\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 16\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n380,\\n130\\n],\\n\\"size\\": [\\n260,\\n100\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 13\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"beautiful oil painting of a cute cat, high quality\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n10,\\n10,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n11,\\n11,\\n0,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n12,\\n12,\\n0,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n13,\\n12,\\n0,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n16,\\n8,\\n0,\\n15,\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,u as data};

import{_ as e,c as t,d as a,o,r as i}from"./app-CWZ_wCfK.js";const s={};function p(r,l){const n=i("VueFlow");return o(),t("div",null,[a(n,{type:"comfyui",data:`{
  "last_node_id": 38,
  "last_link_id": 54,
  "nodes": [
    {
      "id": 4,
      "type": "LivePortraitLoadFaceAlignmentCropper",
      "pos": [
        100,
        1130
      ],
      "size": {
        "0": 510,
        "1": 210
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "cropper",
          "type": "LPCROPPER",
          "links": [
            26
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "LivePortraitLoadFaceAlignmentCropper"
      },
      "widgets_values": [
        "blazeface",
        "torch_gpu",
        "cuda",
        "fp16",
        true
      ]
    },
    {
      "id": 1,
      "type": "DownloadAndLoadLivePortraitModels",
      "pos": [
        100,
        1000
      ],
      "size": {
        "0": 510,
        "1": 82
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "live_portrait_pipe",
          "type": "LIVEPORTRAITPIPE",
          "links": [
            1,
            5
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DownloadAndLoadLivePortraitModels"
      },
      "widgets_values": [
        "auto",
        "animal"
      ]
    },
    {
      "id": 17,
      "type": "VHS_VideoCombine",
      "pos": [
        1180,
        1390
      ],
      "size": [
        490,
        794
      ],
      "flags": {
        "collapsed": false
      },
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 23,
          "slot_index": 0
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": null
        },
        {
          "name": "meta_batch",
          "type": "VHS_BatchManager",
          "link": null
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "Filenames",
          "type": "VHS_FILENAMES",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "VHS_VideoCombine"
      },
      "widgets_values": {
        "frame_rate": 30,
        "loop_count": 0,
        "filename_prefix": "LP AM",
        "format": "video/h264-mp4",
        "pix_fmt": "yuv420p",
        "crf": 19,
        "save_metadata": true,
        "pingpong": false,
        "save_output": true,
        "videopreview": {
          "hidden": false,
          "paused": false,
          "params": {
            "filename": "LP AM_00020.mp4",
            "subfolder": "",
            "type": "output",
            "format": "video/h264-mp4",
            "frame_rate": 30
          }
        }
      }
    },
    {
      "id": 5,
      "type": "LivePortraitProcess",
      "pos": [
        990,
        1000
      ],
      "size": [
        330,
        340
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "pipeline",
          "type": "LIVEPORTRAITPIPE",
          "link": 5,
          "slot_index": 0
        },
        {
          "name": "crop_info",
          "type": "CROPINFO",
          "link": 4
        },
        {
          "name": "source_image",
          "type": "IMAGE",
          "link": 9,
          "slot_index": 2
        },
        {
          "name": "driving_images",
          "type": "IMAGE",
          "link": 7
        },
        {
          "name": "opt_retargeting_info",
          "type": "RETARGETINGINFO",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "cropped_image",
          "type": "IMAGE",
          "links": [
            17
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "output",
          "type": "LP_OUT",
          "links": [
            15
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LivePortraitProcess"
      },
      "widgets_values": [
        false,
        0.03,
        true,
        1,
        "constant",
        "relative",
        0.000003,
        false,
        1
      ]
    },
    {
      "id": 12,
      "type": "LivePortraitComposite",
      "pos": [
        1340,
        1000
      ],
      "size": {
        "0": 240,
        "1": 90
      },
      "flags": {
        "collapsed": true
      },
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "source_image",
          "type": "IMAGE",
          "link": 16,
          "slot_index": 0
        },
        {
          "name": "cropped_image",
          "type": "IMAGE",
          "link": 17
        },
        {
          "name": "liveportrait_out",
          "type": "LP_OUT",
          "link": 15
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "full_images",
          "type": "IMAGE",
          "links": [
            23
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "mask",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LivePortraitComposite"
      }
    },
    {
      "id": 11,
      "type": "PreviewImage",
      "pos": [
        1340,
        1050
      ],
      "size": [
        330,
        290
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 13
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 8,
      "type": "ImageScale",
      "pos": [
        100,
        1390
      ],
      "size": {
        "0": 510,
        "1": 150
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 8
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            9,
            10,
            16
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageScale"
      },
      "widgets_values": [
        "nearest-exact",
        512,
        512,
        "center"
      ]
    },
    {
      "id": 7,
      "type": "VHS_LoadVideo",
      "pos": [
        630,
        1390
      ],
      "size": [
        530,
        790
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [
        {
          "name": "meta_batch",
          "type": "VHS_BatchManager",
          "link": null
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            7
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "frame_count",
          "type": "INT",
          "links": null,
          "shape": 3
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "links": null,
          "shape": 3
        },
        {
          "name": "video_info",
          "type": "VHS_VIDEOINFO",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "VHS_LoadVideo"
      },
      "widgets_values": {
        "video": "d6.mp4",
        "force_rate": 0,
        "force_size": "Disabled",
        "custom_width": 512,
        "custom_height": 512,
        "frame_load_cap": 120,
        "skip_first_frames": 0,
        "select_every_nth": 1,
        "choose video to upload": "image",
        "videopreview": {
          "hidden": false,
          "paused": false,
          "params": {
            "frame_load_cap": 120,
            "skip_first_frames": 0,
            "force_rate": 0,
            "select_every_nth": 1,
            "filename": "d6.mp4",
            "type": "input",
            "format": "video/mp4"
          }
        }
      }
    },
    {
      "id": 6,
      "type": "LoadImage",
      "pos": [
        100,
        1590
      ],
      "size": {
        "0": 510,
        "1": 590
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            8
          ],
          "shape": 3,
          "slot_index": 0
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
        "u=1088737114,3070841736&fm=253&fmt=auto&app=120&f=JPEG.webp",
        "image"
      ]
    },
    {
      "id": 2,
      "type": "LivePortraitCropper",
      "pos": [
        630,
        1000
      ],
      "size": [
        340,
        340
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "pipeline",
          "type": "LIVEPORTRAITPIPE",
          "link": 1
        },
        {
          "name": "cropper",
          "type": "LPCROPPER",
          "link": 26,
          "slot_index": 1
        },
        {
          "name": "source_image",
          "type": "IMAGE",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "cropped_image",
          "type": "IMAGE",
          "links": [
            13
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "crop_info",
          "type": "CROPINFO",
          "links": [
            4
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LivePortraitCropper"
      },
      "widgets_values": [
        512,
        2.5,
        0,
        0,
        0,
        "large-small",
        false
      ]
    }
  ],
  "links": [
    [
      1,
      1,
      0,
      2,
      0,
      "LIVEPORTRAITPIPE"
    ],
    [
      4,
      2,
      1,
      5,
      1,
      "CROPINFO"
    ],
    [
      5,
      1,
      0,
      5,
      0,
      "LIVEPORTRAITPIPE"
    ],
    [
      7,
      7,
      0,
      5,
      3,
      "IMAGE"
    ],
    [
      8,
      6,
      0,
      8,
      0,
      "IMAGE"
    ],
    [
      9,
      8,
      0,
      5,
      2,
      "IMAGE"
    ],
    [
      10,
      8,
      0,
      2,
      2,
      "IMAGE"
    ],
    [
      13,
      2,
      0,
      11,
      0,
      "IMAGE"
    ],
    [
      15,
      5,
      1,
      12,
      2,
      "LP_OUT"
    ],
    [
      16,
      8,
      0,
      12,
      0,
      "IMAGE"
    ],
    [
      17,
      5,
      0,
      12,
      1,
      "IMAGE"
    ],
    [
      23,
      12,
      0,
      17,
      0,
      "IMAGE"
    ],
    [
      26,
      4,
      0,
      2,
      1,
      "LPCROPPER"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        92.39030360014146,
        -785.0522431015163
      ]
    }
  },
  "version": 0.4
}
`})])}const d=e(s,[["render",p],["__file","LivePortrait Animals 1.0【Zho】.json.html.vue"]]),_=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait%20Animals%201.0%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 38, \\"last_link_id\\": 54, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"LivePortraitLoadFaceAlignmentCropper\\", \\"pos\\": [ 100, 1130 ], \\"size\\": { \\"0\\": 510, \\"1\\": 210 }, \\"flags\\": {}...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait%20Animals%201.0%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 38, \\"last_link_id\\": 54, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"LivePortraitLoadFaceAlignmentCropper\\", \\"pos\\": [ 100, 1130 ], \\"size\\": { \\"0\\": 510, \\"1\\": 210 }, \\"flags\\": {}..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.52,"words":755},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait Animals 1.0【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 38,\\n\\"last_link_id\\": 54,\\n\\"nodes\\": [\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"LivePortraitLoadFaceAlignmentCropper\\",\\n\\"pos\\": [\\n100,\\n1130\\n],\\n\\"size\\": {\\n\\"0\\": 510,\\n\\"1\\": 210\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"cropper\\",\\n\\"type\\": \\"LPCROPPER\\",\\n\\"links\\": [\\n26\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LivePortraitLoadFaceAlignmentCropper\\"\\n},\\n\\"widgets_values\\": [\\n\\"blazeface\\",\\n\\"torch_gpu\\",\\n\\"cuda\\",\\n\\"fp16\\",\\ntrue\\n]\\n},\\n{\\n\\"id\\": 1,\\n\\"type\\": \\"DownloadAndLoadLivePortraitModels\\",\\n\\"pos\\": [\\n100,\\n1000\\n],\\n\\"size\\": {\\n\\"0\\": 510,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"live_portrait_pipe\\",\\n\\"type\\": \\"LIVEPORTRAITPIPE\\",\\n\\"links\\": [\\n1,\\n5\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DownloadAndLoadLivePortraitModels\\"\\n},\\n\\"widgets_values\\": [\\n\\"auto\\",\\n\\"animal\\"\\n]\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"VHS_VideoCombine\\",\\n\\"pos\\": [\\n1180,\\n1390\\n],\\n\\"size\\": [\\n490,\\n794\\n],\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 23,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"audio\\",\\n\\"type\\": \\"AUDIO\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"meta_batch\\",\\n\\"type\\": \\"VHS_BatchManager\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"Filenames\\",\\n\\"type\\": \\"VHS_FILENAMES\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VHS_VideoCombine\\"\\n},\\n\\"widgets_values\\": {\\n\\"frame_rate\\": 30,\\n\\"loop_count\\": 0,\\n\\"filename_prefix\\": \\"LP AM\\",\\n\\"format\\": \\"video/h264-mp4\\",\\n\\"pix_fmt\\": \\"yuv420p\\",\\n\\"crf\\": 19,\\n\\"save_metadata\\": true,\\n\\"pingpong\\": false,\\n\\"save_output\\": true,\\n\\"videopreview\\": {\\n\\"hidden\\": false,\\n\\"paused\\": false,\\n\\"params\\": {\\n\\"filename\\": \\"LP AM_00020.mp4\\",\\n\\"subfolder\\": \\"\\",\\n\\"type\\": \\"output\\",\\n\\"format\\": \\"video/h264-mp4\\",\\n\\"frame_rate\\": 30\\n}\\n}\\n}\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"LivePortraitProcess\\",\\n\\"pos\\": [\\n990,\\n1000\\n],\\n\\"size\\": [\\n330,\\n340\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pipeline\\",\\n\\"type\\": \\"LIVEPORTRAITPIPE\\",\\n\\"link\\": 5,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"crop_info\\",\\n\\"type\\": \\"CROPINFO\\",\\n\\"link\\": 4\\n},\\n{\\n\\"name\\": \\"source_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 9,\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"driving_images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 7\\n},\\n{\\n\\"name\\": \\"opt_retargeting_info\\",\\n\\"type\\": \\"RETARGETINGINFO\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"cropped_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n17\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LP_OUT\\",\\n\\"links\\": [\\n15\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LivePortraitProcess\\"\\n},\\n\\"widgets_values\\": [\\nfalse,\\n0.03,\\ntrue,\\n1,\\n\\"constant\\",\\n\\"relative\\",\\n0.000003,\\nfalse,\\n1\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"LivePortraitComposite\\",\\n\\"pos\\": [\\n1340,\\n1000\\n],\\n\\"size\\": {\\n\\"0\\": 240,\\n\\"1\\": 90\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"source_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 16,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"cropped_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 17\\n},\\n{\\n\\"name\\": \\"liveportrait_out\\",\\n\\"type\\": \\"LP_OUT\\",\\n\\"link\\": 15\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"full_images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n23\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LivePortraitComposite\\"\\n}\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1340,\\n1050\\n],\\n\\"size\\": [\\n330,\\n290\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 13\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"ImageScale\\",\\n\\"pos\\": [\\n100,\\n1390\\n],\\n\\"size\\": {\\n\\"0\\": 510,\\n\\"1\\": 150\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 8\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n9,\\n10,\\n16\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageScale\\"\\n},\\n\\"widgets_values\\": [\\n\\"nearest-exact\\",\\n512,\\n512,\\n\\"center\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"VHS_LoadVideo\\",\\n\\"pos\\": [\\n630,\\n1390\\n],\\n\\"size\\": [\\n530,\\n790\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"meta_batch\\",\\n\\"type\\": \\"VHS_BatchManager\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n7\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"frame_count\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"audio\\",\\n\\"type\\": \\"AUDIO\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"video_info\\",\\n\\"type\\": \\"VHS_VIDEOINFO\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VHS_LoadVideo\\"\\n},\\n\\"widgets_values\\": {\\n\\"video\\": \\"d6.mp4\\",\\n\\"force_rate\\": 0,\\n\\"force_size\\": \\"Disabled\\",\\n\\"custom_width\\": 512,\\n\\"custom_height\\": 512,\\n\\"frame_load_cap\\": 120,\\n\\"skip_first_frames\\": 0,\\n\\"select_every_nth\\": 1,\\n\\"choose video to upload\\": \\"image\\",\\n\\"videopreview\\": {\\n\\"hidden\\": false,\\n\\"paused\\": false,\\n\\"params\\": {\\n\\"frame_load_cap\\": 120,\\n\\"skip_first_frames\\": 0,\\n\\"force_rate\\": 0,\\n\\"select_every_nth\\": 1,\\n\\"filename\\": \\"d6.mp4\\",\\n\\"type\\": \\"input\\",\\n\\"format\\": \\"video/mp4\\"\\n}\\n}\\n}\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n100,\\n1590\\n],\\n\\"size\\": {\\n\\"0\\": 510,\\n\\"1\\": 590\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n8\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"u=1088737114,3070841736&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG.webp\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 2,\\n\\"type\\": \\"LivePortraitCropper\\",\\n\\"pos\\": [\\n630,\\n1000\\n],\\n\\"size\\": [\\n340,\\n340\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pipeline\\",\\n\\"type\\": \\"LIVEPORTRAITPIPE\\",\\n\\"link\\": 1\\n},\\n{\\n\\"name\\": \\"cropper\\",\\n\\"type\\": \\"LPCROPPER\\",\\n\\"link\\": 26,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"source_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 10\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"cropped_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n13\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"crop_info\\",\\n\\"type\\": \\"CROPINFO\\",\\n\\"links\\": [\\n4\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LivePortraitCropper\\"\\n},\\n\\"widgets_values\\": [\\n512,\\n2.5,\\n0,\\n0,\\n0,\\n\\"large-small\\",\\nfalse\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n1,\\n1,\\n0,\\n2,\\n0,\\n\\"LIVEPORTRAITPIPE\\"\\n],\\n[\\n4,\\n2,\\n1,\\n5,\\n1,\\n\\"CROPINFO\\"\\n],\\n[\\n5,\\n1,\\n0,\\n5,\\n0,\\n\\"LIVEPORTRAITPIPE\\"\\n],\\n[\\n7,\\n7,\\n0,\\n5,\\n3,\\n\\"IMAGE\\"\\n],\\n[\\n8,\\n6,\\n0,\\n8,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n9,\\n8,\\n0,\\n5,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n10,\\n8,\\n0,\\n2,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n13,\\n2,\\n0,\\n11,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n15,\\n5,\\n1,\\n12,\\n2,\\n\\"LP_OUT\\"\\n],\\n[\\n16,\\n8,\\n0,\\n12,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n17,\\n5,\\n0,\\n12,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n23,\\n12,\\n0,\\n17,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n26,\\n4,\\n0,\\n2,\\n1,\\n\\"LPCROPPER\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 1,\\n\\"offset\\": [\\n92.39030360014146,\\n-785.0522431015163\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{d as comp,_ as data};
